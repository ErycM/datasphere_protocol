import { Routes, Route } from "react-router-dom";
import { Home, Purchase } from "../pages";

export function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Purchase />} />
    </Routes>
  );
}
