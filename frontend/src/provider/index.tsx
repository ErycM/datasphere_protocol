import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface IProvider {
  children: ReactNode;
}

export function Provider({ children }: IProvider) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
