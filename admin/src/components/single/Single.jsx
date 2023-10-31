import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../utils/requestMethods";

// type Props = {
//   id: number;
//   img?: string;
//   title: string;
//   info: object;
//   chart?: {
//     dataKeys: { name: string; color: string }[];
//     data: object[];
//   };
//   activities?: { time: string; text: string }[];
// };

const Single = ({ product, ...props }) => {
  const [pStats, setPStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + product._id);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              Sales: item.total,
              graphic: item.total + 100,
            },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [product._id, MONTHS]);
  const obj = [
    { name: "Sales", color: "#82ca9d" },
    { name: "graphic", color: "#8884d8" },
  ];
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {product.img && <img src={product.img} alt="" />}
            <h1>{product.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {/* {Object.entries(props.info).map((item) => ( */}
            <div className="item">
              <div className="itemTitle itens">Produto: {product.title}</div>
              <div className="itemValue itens">Preço: {product.price}</div>
              <div className="itemColor itens">
                Cor(es): {product.color.map((item) => item)}
              </div>
              <div className="itemFacturer itens">Fabricante: 'production'</div>
              <div className="itemFrom itens">Exportado de: 'production'</div>
            </div>
            {/* ))} */}
          </div>
        </div>
        <hr />
        {pStats && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              {/* Essa é a parte da linha em si q faz o gráfico */}
              <LineChart
                width={500}
                height={300}
                data={pStats}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                {/* Essa é a parte q apawrece emabaixo, ex: Sep, Out */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {obj.map((dataKey, index) => (
                  <Line
                    key={index}
                    type="monotone"
                    // essa parte aparentemente mexe com todo o gráfico, se eu mudar o .name tudo para de funcionar
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
