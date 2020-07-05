import { createContext, useContext } from "react";

import "mobx-react-lite/batchingForReactNative";

import MoviesStore from "./MoviesStore";

export const rootStore = {
  moviesStore: new MoviesStore(),
};

export const RootStoreContext = createContext(rootStore);

export const useStore = () => {
  return useContext(RootStoreContext);
};
