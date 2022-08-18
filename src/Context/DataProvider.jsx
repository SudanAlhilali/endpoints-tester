import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({ url: "", type: "POST" });
  const [outPutResponse, setOutPutResponse] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [params, setParams] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [jsonText, setJsonText] = useState("");

  return (
    <DataContext.Provider
      value={{
        formData,
        setFormData,
        outPutResponse,
        setOutPutResponse,
        responseMessage,
        setResponseMessage,
        params,
        setParams,
        headers,
        setHeaders,
        jsonText,
        setJsonText,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
