import getConfig from "../config";
import { NODE_ENV } from "./environment";

// TODO: Here you can set different endpoints for the backend
const getBaseUrl = () => {
  if(NODE_ENV == "production") {
    console.log("production detected");
    return "https://eventcred-backend.herokuapp.com";
  }
  
  if(NODE_ENV == "development") {
    console.log("development detected");
    return "http://localhost:3000";
  }
  
  if(NODE_ENV == "staging") {
    console.log("staging detected");
    return "https://staging.eventcred-backend.herokuapp.com";
  }
}

export const BASE_URL = getBaseUrl();
