import { dateString } from "../../helper/date";
import { moneystring } from "../../helper/money";

function ColumnTable({ data }) {
  return (
    <>
      <tr className="bg-gray-50 border-b ">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {data.id}
        </th>
        <td className="px-6 py-4">{dateString(data.transactionDate)}</td>
        <td className="px-6 py-4">${moneystring(data.total_Income)}</td>
        <td className="px-6 py-4">{data.source}</td>
      </tr>
    </>
  );
}

export default ColumnTable;
