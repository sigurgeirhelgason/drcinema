import * as constants from "../constants";
import { useSelector } from "react-redux";
import ls from "local-storage";

const cinemaService = () => {
  return {
    getAllCinemas: () =>
      fetch(constants.ENDPOINT + "theaters", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": constants.TOKEN,
        },
      }).then((response) => response.json()),
  };
};

export default cinemaService();
