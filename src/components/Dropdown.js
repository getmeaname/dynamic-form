const Dropdown = ({ options, onChange }) => {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;
  