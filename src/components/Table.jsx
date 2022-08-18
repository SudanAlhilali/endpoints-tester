import React, { useState } from "react";
import AddRow from "./AddRow";

const CreateTable = ({ text, data, setData }) => {
  const [rows, setRows] = useState([0]);

  //add
  const addRowFunction = () => {
    console.log("add row function before : " + JSON.stringify(rows));
    if (text === "params") {
      setRows((oldRows) => [...oldRows, oldRows.length]);
    }
    if (text === "headers") {
      setRows((oldRows) => [...oldRows, oldRows.length]);
    }
    console.log("add row function after : " + JSON.stringify(rows));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-bold font-medium text-gray-900 px-6 py-4 border-r"
                  >
                    Checkbox
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold font-large text-gray-900 px-6 py-4 border-r"
                  >
                    Key
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-bold font-medium text-gray-900 px-6 py-4 border-r"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => {
                  return (
                    <AddRow
                      text={text}
                      rowId={index}
                      key={index}
                      data={data}
                      setData={setData}
                    />
                  );
                })}
              </tbody>
            </table>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={() => {
                addRowFunction();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTable;
