import React, { useState } from "react";

const AddRow = ({ text, rowId, data, setData }) => {
  const [checkCheckbox, setCheckCheckbox] = useState(false);

  // onChagneCheckHandler
  const onChagneCheckHandler = (e) => {
    let result = data.filter((entry) => entry.id === Number(e.target.name))[0];

    if (!checkCheckbox) {
      setCheckCheckbox(true);
      result = { ...result, id: rowId, check: true };
    } else {
      setCheckCheckbox(false);
      result = { ...result, id: rowId, check: false };
    }
    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArr = Object.assign([...data], {
        [index]: result,
      });
      setData(newArr);
    }
  };

  const onTextChange = (e) => {
    // console.log(e.target.name, e.target.value);
    let result = data.filter((entry) => entry.id === rowId)[0];
    result = {
      ...result,
      id: rowId,
      [e.target.name]: e.target.value,
    };

    let index = data.findIndex((value) => value.id === rowId);

    if (index === -1) {
      setData((oldArr) => [...oldArr, result]);
    } else {
      const newArray = Object.assign([...data], {
        [index]: result,
      });
      setData(newArray);
    }

    console.log("DATA is " + JSON.stringify(data));
  };

  return (
    <>
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
          <input
            type="checkbox"
            value={checkCheckbox}
            className="w-8 h-8"
            onChange={(e) => onChagneCheckHandler(e)}
            name={rowId}
          />
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
          <input
            type="text"
            className="w-full py-2 bg-gray-50"
            placeholder="key"
            onChange={(e) => {
              onTextChange(e);
            }}
            name="key"
          />
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
          <input
            type="text"
            className="w-full py-2 bg-gray-50 "
            placeholder="value"
            onChange={(e) => {
              onTextChange(e);
            }}
            name="value"
          />
        </td>
      </tr>
    </>
  );
};

export default AddRow;
