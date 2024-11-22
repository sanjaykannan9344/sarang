import React from "react";

const Table = ({ data }) => {
  return (
    <div className="mx-5 cursor-text">
      <table className=" border-collapse border border-gray-600">
        <thead className="bg-gray-200 text-center">
          <tr>
            {/* Assuming each object in the data array has the same keys */}
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="border border-gray-600 px-2  py-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-wrap">
              {Object.entries(item).map(([key, value]) => (
                <td
                  key={key}
                  className={
                    value === ""
                      ? `bg-[#FFF5EE] `
                      : `border border-gray-600 px-2 py-2  `
                  }
                >
                  {key === "Specifications" ||key === "Description" 
                    ? // Split Specifications by * 
                      value
                        .split("*")
                        .map((spec, idx) => <div key={idx}>{spec.trim()}</div>)
                    : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
