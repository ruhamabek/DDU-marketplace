import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import LoginScreen from "./auth/login/Page";
import RegisterScreen from "./auth/register/Page";

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
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>{" "}
    </div>
  );
}

export default AppRoutes;
