import { useEffect, useState } from "react";
import "./style.scss";
import { userRequest } from "../../utils/requestMethods";
import TimeAgo from "react-timeago";
import { Button } from "./style";

interface LatestSales {
  _id: string;
  userId: string;
  products: [productId: string, quantity: number, _id: string];
  amount: number;
  address: string;
  status: string;
  createdAt: Date;
}

const Charts = () => {
  const [orders, setOrders] = useState<LatestSales[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest("orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  });

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">
              {<TimeAgo date={order.createdAt} />}
            </td>
            <td className="widgetLgAmount">${order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Charts;
