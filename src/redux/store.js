import { createStore, applyMiddleware,compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
  } from "react-redux-i18n";
import translations from "../i18next/translations";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

export default store;