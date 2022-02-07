import {
  SET_CITIES,
  SET_DISTRCITS,
  SET_LOCATION,
  SET_PROVINCES,
  SET_ERROR,
  SET_PROVINCES_LOADING,
  SET_SUB_DISTRICTS,
  SET_DISTRICTS_LOADING,
  SET_SUB_DISTRICTS_LOADING,
  SET_CITIES_LOADING,
} from "../actionTypes";

const initialState = {
  provinces: [],
  provincesLoading: true,
  cities: [],
  citiesLoading: false,
  districts: [],
  districtsLoading: false,
  subDistricts: [],
  subDistrictsLoading: false,
  location: {},
  error: null,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROVINCES:
      return { ...state, provinces: payload };

    case SET_PROVINCES_LOADING:
      return { ...state, provincesLoading: payload };

    case SET_CITIES:
      return { ...state, cities: payload };

    case SET_CITIES_LOADING:
      return { ...state, citiesLoading: payload };

    case SET_DISTRCITS:
      return { ...state, districts: payload };

    case SET_DISTRICTS_LOADING:
      return { ...state, districtsLoading: payload };

    case SET_SUB_DISTRICTS:
      return { ...state, subDistricts: payload };

    case SET_SUB_DISTRICTS_LOADING:
      return { ...state, subDistrictsLoading: payload };

    case SET_LOCATION:
      return { ...state, location: payload };

    case SET_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
