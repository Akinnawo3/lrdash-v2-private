import axios from "axios";
import { baseURL } from "../constants/urls";

const headers = {
    "Content-Type": "application/json",
    "accept": "application/json"
};

export const getApi = async (url) => {
    const res = await axios.get(`${baseURL}/${url}`, {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : null,
        }
    });
    return res;
};

export const postApi = async (url, payload) => {
    const res = await axios.post(`${baseURL}/${url}`, payload, {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : null,
        }
    });
    return res;
};

export const putApi = async (url, payload) => {
    const res = await axios.put(`${baseURL}/${url}`, {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : null,
        }
    });
    return res;
};

export const patchApi = async (url, payload) => {
    const res = await axios.patch(`${baseURL}/${url}`, payload, {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : null,
        }
    });
    return res;
};

export const deleteApi = async (url) => {
    const res = await axios.delete(`${baseURL}/${url}`, {
        headers: {
            ...headers,
            "Authorization": localStorage.getItem("access_token") ? "Bearer " + localStorage.getItem("access_token") : null,
        }
    });
    return res;
};
