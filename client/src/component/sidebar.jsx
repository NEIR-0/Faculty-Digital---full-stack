import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="hidden md:z-20 md:block md:fixed md:h-full md:w-[20%] md:py-5 md:px-2 md:bg-black lg:w-[15%]">
        {/* dashboard */}
        <button
          onClick={() => {
            navigate("/dashboard");
          }}
          className={
            pathname === "/dashboard"
              ? "flex w-full bg-white cursor-pointer py-1.5 px-3 justify-self-start items-center rounded-sm mb-3"
              : "flex w-full bg-gray-300 cursor-pointer py-1.5 px-3 justify-self-start items-center rounded-sm mb-3"
          }
        >
          <i className="fas fa-chart-line" />
          <h1 className="ms-3">Dashboard</h1>
        </button>
        {/* detail */}
        <button
          onClick={() => {
            navigate("/detail");
          }}
          className={
            pathname === "/detail"
              ? "flex w-full bg-white cursor-pointer py-1.5 px-3 justify-self-start items-center rounded-sm mb-3"
              : "flex w-full bg-gray-300 cursor-pointer py-1.5 px-3 justify-self-start items-center rounded-sm mb-3 duration-300 ease-out hover:bg-white"
          }
        >
          <i className="fas fa-chart-pie" />
          <h1 className="ms-3">Detail</h1>
        </button>

        {/* logout */}
        <button
          onClick={logout}
          className="flex w-full bg-gray-300 cursor-pointer py-1.5 px-3 justify-self-start items-center rounded-sm mb-3 duration-300 ease-out hover:bg-white"
        >
          <i className="fas fa-sign-out-alt fa-rotate-180" />
          <h1 className="ms-3">Logout</h1>
        </button>
      </nav>

      <nav className="w-full h-12 z-20 flex justify-end bg-black relative md:hidden">
        <button
          onClick={() => setShow(!show)}
          className="h-12 w-12 flex justify-center items-center bg-white"
        >
          <i class="fas fa-bars text-[40px]" />
        </button>

        <div
          className={
            show === false
              ? "absolute z-20 w-full top-full left-full duration-300 ease-in-out transition-all"
              : "absolute z-20 w-full top-full left-0 duration-300 ease-in-out transition-all"
          }
        >
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className={
              pathname === "/dashboard"
                ? "flex bg-white cursor-pointer justify-center items-center w-full h-14"
                : "flex bg-gray-300 cursor-pointer justify-center items-center w-full h-14"
            }
          >
            <i className="fas fa-chart-line text-[24px]" />
            <h1 className="ms-5 text-[25px]">Dashboard</h1>
          </button>
          <button
            onClick={() => {
              navigate("/detail");
            }}
            className={
              pathname === "/detail"
                ? "flex bg-white cursor-pointer justify-center items-center w-full h-14"
                : "flex bg-gray-300 cursor-pointer justify-center items-center w-full h-14"
            }
          >
            <i className="fas fa-chart-pie text-[24px]" />
            <h1 className="ms-5 text-[25px]">Detail</h1>
          </button>
          <button
            onClick={logout}
            className="flex bg-gray-300 cursor-pointer justify-center items-center w-full h-14 duration-300 ease-out hover:bg-white"
          >
            <i className="fas fa-sign-out-alt fa-rotate-180 text-[24px]" />
            <h1 className="ms-5 text-[25px]">Logout</h1>
          </button>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
