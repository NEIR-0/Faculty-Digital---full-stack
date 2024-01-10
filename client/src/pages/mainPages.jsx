import { useEffect } from "react";
import SideBar from "../component/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function MainPages() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/dashboard");
    }
  }, [pathname, navigate]);
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default MainPages;
