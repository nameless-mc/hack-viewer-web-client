import { Axios } from "axios";

const axios = new Axios({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:8081",
  withCredentials: true,
  responseType: "json",
  transformResponse: [
    function transformResponse(data, headers) {
      return JSON.parse(data);
    },
  ],
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data);
    },
  ],
  validateStatus: function (status) {
    return status < 400;
  },
  headers: { "Content-Type": "application/json" },
});

export default axios;
