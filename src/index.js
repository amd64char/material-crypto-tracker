import React, { useState } from "react";
import ReactDOM from "react-dom";
import Moment from "moment";
import App from "./components/app";

const currentDate = Moment().format('LL');
const apiBaseUrl = process.env.COINMARKETCAP_BASE_URL;
const apiSecretName = process.env.COINMARKETCAP_KEY_NAME;
const apiSecretValue = process.env.COINMARKETCAP_KEY_VALUE;

ReactDOM.render(
    <App currentDate={currentDate} apiBaseUrl={apiBaseUrl} apiSecretName={apiSecretName} apiSecretValue={apiSecretValue} />,
    document.getElementById("app")
  );