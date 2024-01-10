import { useEffect, useState } from "react";
import Charts from "../component/charts";
import axios from "axios";
import { route } from "../../router/router";
import { monthOnly } from "../../helper/date";
import { moneystring } from "../../helper/money";

function Dashboard() {
  useEffect(() => {
    dataRevenue();
  }, []);

  const [data, setData] = useState([]);
  const dataRevenue = async () => {
    try {
      const { data } = await axios.get(route, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      });
      const charts = data.map((el) => {
        delete el.source;
        el.transactionDate = monthOnly(el.transactionDate);
        return el;
      });
      setData(charts);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message,
      });
    }
  };

  return (
    <>
      <section className="ml-[15%] h-screen p-5">
        <div className="flex items-center flex-col justify-center w-full h-full">
          <h1 className="text-[30px] mb-5">Company Revenue of 2023</h1>
          <div className="w-full h-[500px] ps-5">
            <Charts data={data} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
