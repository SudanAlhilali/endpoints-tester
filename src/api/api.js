import axios from "axios";
import { getHeaderAndParams } from "../common utils/common-utils";

export const getData = async (
  formData,
  jsonText,
  params,
  headers,
  setErrorMsg
) => {
  const apiType = formData.type.toLowerCase();
  const apiURL = formData.url;

  console.log("api_param_before " + JSON.stringify(params));

  const apiParams = getHeaderAndParams(params);
  const apiHeaders = getHeaderAndParams(headers);
  console.log("api_params_after" + JSON.stringify(apiParams));

  try {
    return await axios({
      method: apiType,
      url: apiURL,
      body: jsonText,
      headers: apiHeaders,
      "Access-Control-Allow-Origin": "*",
      params: apiParams,
    });
  } catch (error) {
    return "error";
  }
};
