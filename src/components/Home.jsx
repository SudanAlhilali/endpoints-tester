import { useContext, useState } from "react";
import { DataContext } from "../Context/DataProvider";
import Response from "./Response";
import SelectedTab from "./Tab";
import { checkParams } from "../common utils/common-utils";
import { getData } from "../api/api";
import SnackBar from "./SnackBar";
import ErrorScreen from "./ErrorScreen";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// test one
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const {
    formData,
    setFormData,
    outPutResponse,
    setOutPutResponse,
    jsonText,
    params,
    headers,
  } = useContext(DataContext);

  // useState consts
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);

  // HTTPS Method
  const onChangedHandler = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, type: e.target.value });
  };

  // input URL handler
  const onChangeUserInputHandler = (e) => {
    setFormData({ ...formData, url: e.target.value });
  };

  const onSend = async (e) => {
    if (!checkParams(formData, jsonText, params, headers, setErrorMsg)) {
      setError(true);
      return false;
    }

    let response = await getData(
      formData,
      jsonText,
      params,
      headers,
      setErrorMsg
    );

    if (response === "error") {
      setErrorResponse(true);
      setError(true);
      return;
    }
    setOutPutResponse(response.data);
    console.log("Home page file and data is " + JSON.stringify(response.data));
  };

  return (
    <div className="md:container  ">
      {/* <h1 className="text-6xl mb-16 mt-16 text-center">Endpoint Tester</h1> */}
      <img className="w-full" src="./logo.svg" alt="logo" />
      <div className="flex ">
        <select
          onChange={(e) => onChangedHandler(e)}
          className="bg-gray-50 inline border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="POST" selected>
            POST
          </option>
          <option value="GET">GET</option>
          <option value="DELETE">DELETE</option>
          <option value="PUT">PUT</option>
        </select>
        <input
          className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.url}
          onChange={(e) => {
            onChangeUserInputHandler(e);
          }}
          placeholder="URL input"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={(e) => {
            onSend(e);
          }}
        >
          Send
        </button>
      </div>
      <SelectedTab />
      <Box>
        {errorResponse ? <ErrorScreen /> : <Response data={outPutResponse} />}
      </Box>

      {error && (
        <SnackBar errorMsg={errorMsg} error={error} setError={setError} />
      )}

      {/* Footer */}
      <div className="flex flex-col  justify-center items-center">
        <div className="text-3xl bold mb-2">Developed By Sudan Alhilali</div>
        <div className="flex flex-row justify-center-items-center">
          <a href="https://github.com/SudanAlhilali" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareGithub} className="text-5xl mr-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudan-alhilali/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
