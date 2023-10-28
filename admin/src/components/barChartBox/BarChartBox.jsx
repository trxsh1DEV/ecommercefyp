import {
  Bar,
  BarChart,
  Cell,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./barChartBox.scss";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../utils/requestMethods";

const BarChartBox = () => {
  const [userStats, setUserStats] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Novo estado para o índice ativo

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
        const res = await userRequest.get("/users/stats");
        res.data.map((item, index) =>
          setUserStats((prev) => [
            ...prev,
            {
              name: MONTHS[item._id - 1],
              "Active User": item.total,
            },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);
  const test = "asd";

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="barChartBox">
      <h1>Total visits</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={userStats}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey="Active User" fill="#FF8042" onClick={handleClick}>
              {userStats.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`Usuários de "${
          userStats[activeIndex]?.name || "none"
        }"`}</p>
      </div>
    </div>
  );
};

export default BarChartBox;
