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
      <section className="p-5 h-screen md:ml-[20%] lg:ml-[15%]">
        <div className="flex items-center flex-col justify-center w-full h-full">
          <h1 className="text-[30px] mb-5 text-center">
            Company Revenue of 2023
          </h1>
          <div className="w-full h-[300px] md:h-[400px] lg:w-[70%] lg:h-[500px] lg:">
            <Charts data={data} />
          </div>
          <p className="text-[10px] mt-5 text-center">
            Based on the provided data, it can be concluded that the sources
            contributing the most income are "Service Fees" with a total income
            of 120,000,000 in February 2023, followed by "Product Sales" with a
            total income of 115,000,000 in August 2023. These two categories
            stand out as they make the most significant contributions to the
            overall income throughout the year 2023
          </p>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
