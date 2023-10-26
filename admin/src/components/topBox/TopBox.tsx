import "./topBox.scss";
import { useEffect, useState } from "react";
import { userRequest } from "../../utils/requestMethods.js";
import { Visibility } from "@mui/icons-material";

const TopBox = () => {
  interface User {
    _id: number;
    img: string;
    email: string;
    // username: string;
    amount: number;
  }
  const [users, setuser] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/all");
        setuser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {users.map((user) => (
          <div className="listItem" key={user._id}>
            <div className="user">
              <img
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
              />
              <div className="userTexts">
                <span className="username">{user.email && "username"}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            {/* <span className="amount">${user.amount}</span> */}
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
