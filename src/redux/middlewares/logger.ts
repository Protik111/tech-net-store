import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("Current state", store.getState());
  console.log("Action", action);

  next(action);
  console.log("Update state", store.getState());
};

export default logger;
