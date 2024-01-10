import { useEffect, useState } from "react";
import SideBar from "../component/sidebar";
import axios from "axios";
import { route } from "../../router/router";
import ColumnTable from "../component/column";
import { monthOnly } from "../../helper/date";

function DetailPages() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    dataRevenue();
  }, [filter, search]);
  useEffect(() => {
    sortingData();
  }, []);

  const dataRevenue = async () => {
    try {
      const options = {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
        params: {},
      };
      if (filter) {
        options.params.filter = filter;
      }
      if (search) {
        options.params.search = search;
      }

      const { data } = await axios.get(route, options);
      setData(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: error.response.data.message,
      });
    }
  };
  const sortingData = async () => {
    try {
      const { data } = await axios.get(route, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      });
      setSorting(data);
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
      <section className="ml-[15%] p-5">
        <h1 className="text-[25px] mb-10 underline">Detail Income:</h1>
        <div className="w-full h-7 flex justify-between mb-5">
          {/* sort */}
          <select
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            name="sorting"
            id="sorting"
            className="h-full px-2"
          >
            <option value="">filter</option>
            {sorting &&
              sorting.map((el) => {
                return (
                  <option key={el.id} value={el.transactionDate}>
                    {monthOnly(el.transactionDate)}
                  </option>
                );
              })}
          </select>
          {/* search */}
          <div className="w-[50%] flex items-center">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              name="search"
              id="search"
              className="w-full h-full border-[1px] border-slate-800 px-2 outline-none"
            />
            <i className="fas fa-search px-3 py-1.5 bg-slate-800 text-white" />
          </div>
        </div>
        {/* detail income */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-white uppercase bg-slate-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  transactionDate
                </th>
                <th scope="col" className="px-6 py-3">
                  total_Income
                </th>
                <th scope="col" className="px-6 py-3">
                  source
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((el) => {
                  return <ColumnTable key={el.id} data={el} />;
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default DetailPages;
