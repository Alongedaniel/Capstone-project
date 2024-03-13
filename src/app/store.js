import { configureStore } from "@reduxjs/toolkit";
// import countSlice from "../features/count/countSlice";
import userSlice from "../features/users/userSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    // user: countSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
