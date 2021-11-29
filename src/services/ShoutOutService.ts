import axios from "axios";
import ShoutOut from "../models/ShoutOut";

const baseURL: string = process.env.REACT_APP_API_URL || "";

export const getAllShoutOuts = (): Promise<ShoutOut[]> =>
  axios.get(baseURL).then((response) => response.data);

export const addShoutOut = (shoutOut: ShoutOut): Promise<ShoutOut> => {
  return axios.post(baseURL, shoutOut).then((response) => response.data);
};

export const getShoutOutsByName = (name: string): Promise<ShoutOut[]> => {
  return axios
    .get(`${baseURL}/${encodeURIComponent(name)}`)
    .then((response) => response.data);
};
