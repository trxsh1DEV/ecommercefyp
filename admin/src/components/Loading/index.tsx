import { CircularProgress } from "@mui/material";
import "./styles.scss";

const Loading = () => {
  return (
    <div className="Container">
      <div className="Icon"></div>
      <span>
        <CircularProgress size={"8rem"} color={"error"} />
      </span>
    </div>
  );
};

export default Loading;
