import axios from "axios";
const url = "https://johannes-task-danacita.herokuapp.com";

export const locationApi = axios.create({
  baseURL: url,
});
