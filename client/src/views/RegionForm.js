// Components
import DropdownInput from "../components/DropdownInput";
// React
import { useEffect, useState } from "react";
// React Redux
import { useDispatch, useSelector } from "react-redux";
// Store
import {
  fetchCities,
  fetchDistricts,
  fetchProvinces,
  fetchSubDistricts,
  getUserGeolocationDetails,
  setDistrcits,
  setSubDistricts,
} from "../store/actionCreators";
import DropdownDisabled from "../components/DropdownDisabled";
import ErrorAlert from "../components/ErrorAlert";
import Loading from "../components/Loading";

const RegionForm = () => {
  const [formData, setFormData] = useState({
    province: 0,
    city: 0,
    district: 0,
    subDistrict: 0,
  });
  const dispatch = useDispatch();
  const {
    provinces,
    cities,
    districts,
    subDistricts,
    location,
    error,
    provincesLoading,
    citiesLoading,
    districtsLoading,
    subDistrictsLoading,
  } = useSelector((store) => store);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [field]: value,
    });

    if (field === "province") {
      dispatch(fetchCities(value));
      dispatch(setDistrcits([]));
      dispatch(setSubDistricts([]));
    } else if (field === "city") {
      dispatch(fetchDistricts(value));
      dispatch(setSubDistricts([]));
    } else if (field === "district") {
      dispatch(fetchSubDistricts(value));
    }
  };

  useEffect(() => {
    dispatch(getUserGeolocationDetails());
    dispatch(fetchProvinces());
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center my-10">
      <div className=" mb-8">
        <h1 className="text-primary font-semibold text-3xl text-center">
          User Region Data
        </h1>
        <h3 className="text-center">
          Your location: <div class="badge badge-primary">{location.city}</div>{" "}
        </h3>
      </div>
      <div>{error && <ErrorAlert />}</div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          {!provincesLoading && (
            <DropdownInput
              title="province"
              data={provinces}
              fun={handleChange}
            />
          )}

          {provincesLoading && <Loading />}
        </div>
        <div className="w-full">
          {citiesLoading && <Loading />}
          {!citiesLoading && formData.province > 0 && (
            <DropdownInput title="city" data={cities} fun={handleChange} />
          )}
          {!citiesLoading && formData.province === 0 && (
            <DropdownDisabled title="city" />
          )}
        </div>

        <div className="w-full">
          {districtsLoading && <Loading />}
          {!districtsLoading && districts.length > 0 && (
            <DropdownInput
              title="district"
              data={districts}
              fun={handleChange}
            />
          )}
          {!districtsLoading && districts.length === 0 && (
            <DropdownDisabled title="district" />
          )}
        </div>

        <div className="w-full"></div>
        {subDistrictsLoading && <Loading />}
        {!subDistrictsLoading &&
          formData.district > 0 &&
          subDistricts.length > 0 && (
            <DropdownInput
              title="subDistrict"
              data={subDistricts}
              fun={handleChange}
            />
          )}
        {!subDistrictsLoading && subDistricts.length <= 0 && (
          <DropdownDisabled title="subDistrict" />
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button class="btn btn-primary w-full">Submit</button>
      </div>
    </div>
  );
};

export default RegionForm;
