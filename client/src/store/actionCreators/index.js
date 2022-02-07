import { locationApi } from "../../api/location";
import {
  SET_CITIES,
  SET_DISTRCITS,
  SET_LOCATION,
  SET_PROVINCES,
  SET_ERROR,
  SET_PROVINCES_LOADING,
  SET_SUB_DISTRICTS,
  SET_CITIES_LOADING,
  SET_DISTRICTS_LOADING,
  SET_SUB_DISTRICTS_LOADING,
} from "../actionTypes";
import axios from "axios";

// Provinces
const setProvinces = (payload) => {
  return { type: SET_PROVINCES, payload };
};
const setProvincesLoading = (payload) => {
  return { type: SET_PROVINCES_LOADING, payload };
};

// Cities
const setCities = (payload) => {
  return { type: SET_CITIES, payload };
};

const setCitiesLoading = (payload) => {
  return { type: SET_CITIES_LOADING, payload };
};

// Districts

export const setDistrcits = (payload) => {
  return { type: SET_DISTRCITS, payload };
};

export const setDistrcitsLoading = (payload) => {
  return { type: SET_DISTRICTS_LOADING, payload };
};

// Sub districts

export const setSubDistricts = (payload) => {
  return { type: SET_SUB_DISTRICTS, payload };
};

export const setSubDistrictsLoading = (payload) => {
  return { type: SET_SUB_DISTRICTS_LOADING, payload };
};

// Location

export const setLocation = (payload) => {
  return { type: SET_LOCATION, payload };
};

// Error
const setError = (payload) => {
  return { type: SET_ERROR, payload };
};

export const fetchProvinces = () => {
  return async (dispatch) => {
    try {
      const { data: provinces } = await locationApi.get("/provinces");
      dispatch(setProvinces(provinces));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setProvincesLoading(false));
    }
  };
};

export const fetchCities = (id) => {
  return async (dispatch) => {
    dispatch(setCitiesLoading(true));
    try {
      const { data: cities } = await locationApi.get(`/cities/${id}`);
      dispatch(setCities(cities));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setCitiesLoading(false));
    }
  };
};

export const fetchDistricts = (id) => {
  return async (dispatch) => {
    dispatch(setDistrcitsLoading(true));
    try {
      const { data: districts } = await locationApi.get(`/districts/${id}`);
      dispatch(setDistrcits(districts));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setDistrcitsLoading(false));
    }
  };
};

export const fetchSubDistricts = (id) => {
  return async (dispatch) => {
    dispatch(setSubDistrictsLoading(true));
    try {
      const { data: subDistricts } = await locationApi.get(
        `/subDistricts/${id}`
      );
      dispatch(setSubDistricts(subDistricts));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setSubDistrictsLoading(false));
    }
  };
};

export const getUserGeolocationDetails = () => {
  return (dispatch) => {
    axios
      .get(
        "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
      )
      .then(({ data }) => {
        dispatch(setLocation(data));
        return data;
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};
