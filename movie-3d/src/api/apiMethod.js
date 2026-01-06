import api from "./axios";

/* =========================
   COMMON API METHODS
========================= */

export const apiGet = (url, params = {}) => {
  return api.get(url, { params });
};

export const apiPost = (url, data = {}) => {
  return api.post(url, data);
};

export const apiPut = (url, data = {}) => {
  return api.put(url, data);
};

export const apiDelete = (url) => {
  return api.delete(url);
};
