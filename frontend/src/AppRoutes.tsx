import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <div className=" bg-[#38474E] ">
      <Routes>
        <Route
          path="/"
          element={
            <Layout showHero>
              <HomePage />
            </Layout>
          }
        />
      </Routes>{" "}
    </div>
  );
}

export default AppRoutes;
