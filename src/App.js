import React, { useState } from "react";
import { formData } from "./data/formData"; // Ensure this path matches your project structure
import Dropdown from "./components/Dropdown";
import FormRenderer from "./components/FormRenderer";
import Table from "./components/Table";

function App() {
  const [formType, setFormType] = useState("userInformation");
  const [fields, setFields] = useState(formData[formType].fields);
  const [formDataState, setFormDataState] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setFields(formData[type].fields);
    setFormDataState({});
  };

  const handleFieldChange = (e) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formDataState]);
    setFormDataState({});
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000); // Hide success message after 2 seconds
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dynamic Form</h1>
      {showSuccess && (
        <div className="mb-4 p-3 bg-green-100 border border-green-500 text-green-800 rounded-md">
          Form submitted successfully!
        </div>
      )}
      <Dropdown
        options={[
          { label: "User Information", value: "userInformation" },
          { label: "Address Information", value: "addressInformation" },
          { label: "Payment Information", value: "paymentInformation" },
        ]}
        onChange={handleFormTypeChange}
      />
      <FormRenderer
        fields={fields}
        onChange={handleFieldChange}
        formData={formDataState}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
      {submittedData.length > 0 && (
        <Table
          data={submittedData}
          onDelete={(index) =>
            setSubmittedData(submittedData.filter((_, i) => i !== index))
          }
          onEdit={(index) => {
            setFormDataState(submittedData[index]);
            setSubmittedData(submittedData.filter((_, i) => i !== index));
          }}
        />
      )}
    </div>
  );
}

export default App;
