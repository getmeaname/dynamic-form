const FormRenderer = ({ fields, onChange, formData }) => {
    return (
      <form className="space-y-6">
        {fields.map((field) => (
          <div key={field.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            {field.type === "dropdown" ? (
              <select
                name={field.name}
                required={field.required}
                onChange={onChange}
                value={formData[field.name] || ""}
                className="p-2 border border-gray-300 rounded-md w-full"
              >
                <option value="">Select</option>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                onChange={onChange}
                value={formData[field.name] || ""}
                className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        ))}
      </form>
    );
  };
  
  export default FormRenderer;
  