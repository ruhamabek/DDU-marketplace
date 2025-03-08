import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/auth/AuthPage";

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
        <Route path="/auth/:pathname" element={<AuthPage />} />
      </Routes>{" "}
    </div>
  );
}

export default AppRoutes;
