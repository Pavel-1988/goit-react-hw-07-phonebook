import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

import { formReducer } from "./formSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: formReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch);








//============= в1===========================================//


// import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "./contactsApi";
// import { filterReducer } from './FilterSlice'
// import { setupListeners } from "@reduxjs/toolkit/query";


// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(contactsApi.middleware),
// });

// setupListeners(store.dispatch);