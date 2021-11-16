import * as constants from "../constants";
import ls from "local-storage";

async function getToken() {
  var postItems = {
    method: "POST",
    body: JSON.stringify(constants.LOGIN),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  response = await fetch(constants.ENDPOINT_AUTH, postItems);

  return response.json().then((data) => {
    // console.log("Frá service:\n", data.token);
    ls.set("key", data.token);
    ls.set("date", new Date());
    return data.token;
  });
}

export default getToken();
