import { FC } from "react";

export const Button: FC<{ type: string }> = ({ type }) => {
  return <button className={"widgetLgButton " + type}>{type}</button>;
};
