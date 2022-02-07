const baseUrl = "https://api.danacita.co.id/locations";
const axios = require("axios");

class apiController {
  static async provinces(req, res) {
    try {
      const { data: provinces } = await axios.get(`${baseUrl}/provinces`);
      res.status(200).json(provinces);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async cities(req, res) {
    try {
      const { id } = req.params;
      const { data: cities } = await axios.get(
        `${baseUrl}/cities?province_id=${id}`
      );
      res.status(200).json(cities);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async districts(req, res) {
    try {
      const { id } = req.params;
      const { data: districts } = await axios.get(
        `${baseUrl}/districts?city_id=${id}`
      );
      res.status(200).json(districts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async subDisctricts(req, res) {
    try {
      const { id } = req.params;
      const { data: subDistricts } = await axios.get(
        `${baseUrl}/sub-districts?district_id=${id}`
      );
      res.status(200).json(subDistricts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = apiController;
