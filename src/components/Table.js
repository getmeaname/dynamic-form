const Table = ({ data, onDelete, onEdit }) => {
    return (
      <table className="w-full border-collapse border bg-white rounded-md overflow-hidden shadow-md">
        <thead className="bg-gray-100">
          <tr>
            {Object.keys(data[0] || {}).map((key, index) => (
              <th key={index} className="border px-4 py-2 text-left text-sm text-gray-600">
                {key}
              </th>
            ))}
            <th className="border px-4 py-2 text-left text-sm text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-gray-50 even:bg-white">
              {Object.values(row).map((value, i) => (
                <td key={i} className="border px-4 py-2 text-sm text-gray-700">
                  {value}
                </td>
              ))}
              <td className="border px-4 py-2">
                <button
                  onClick={() => onEdit(index)}
                  className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  