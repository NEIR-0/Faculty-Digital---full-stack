import { useNavigate, useLocation } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logout = () => {
    // console.log("logout");
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="fixed h-full w-[15%] py-5 px-2 bg-black">
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
    </>
  );
}

export default SideBar;
