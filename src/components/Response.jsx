import React from "react";

const Response = ({ data }) => {
  return (
    <>
      <div className="">
        <span className="block mt-18">
          <strong>RESPONSE:</strong>
        </span>
        <div className="">
          <pre className="app_response_pre">
            {JSON.stringify(data, null, 4)}
          </pre>
        </div>
      </div>
    </>
  );
};

export default Response;
