import { FILE_LOADED, SET_PERCENT, SET_SLUG, UPLOAD_END, UPLOAD_START } from "../actions/types";

const initialState = {
  data: null,
  uploadedPercent: 0,
  isUploading: false,
  isUploaded: false,
  downloadLink: null,
  slug: false,
};

const fileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_START:
      return {
        ...state,
        isUploading: true,
      };
    case UPLOAD_END:
      return {
        ...state,
        uploadedPercent: 0,
        isUploading: false,
        isUploaded: true,
      };
    case FILE_LOADED:
      return {
        ...state,
        data: {
          name: payload.name,
          size: payload.size,
          type: payload.type,
        },
      };
    case SET_PERCENT:
      return {
        ...state,
        uploadedPercent: payload,
      };
    case SET_SLUG:
      return {
        ...state,
        slug: payload,
      };
    default:
      return state;
  }
};

export default fileReducer;
