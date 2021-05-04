import { FILE_LOADED, SET_PERCENT, SET_SLUG, UPLOAD_END, UPLOAD_START } from "./types";

export const loadFile = (file) => (dispatch) => {
  dispatch({
    type: FILE_LOADED,
    payload: file,
  });
};

export const setPercent = (progressEvent) => (dispatch) => {
  const percent = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
  dispatch({
    type: SET_PERCENT,
    payload: percent,
  });
};

export const uploadStart = () => (dispatch) => {
  dispatch({
    type: UPLOAD_START,
  });
};

export const uploadEnd = () => (dispatch) => {
  dispatch({
    type: UPLOAD_END,
  });
};

export const setSlug = (slug) => (dispatch) => {
  dispatch({
    type: SET_SLUG,
    payload: slug,
  });
};
