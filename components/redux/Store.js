import { configureStore } from "@reduxjs/toolkit";
import Rootreducer from "./Rootreducer";

const store = configureStore({
    reducer:Rootreducer
})
export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './Reducer';

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable the serializable check
//     }),
// });

// export default store;
