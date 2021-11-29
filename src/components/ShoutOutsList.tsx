import ShoutOut from "../models/ShoutOut";
import ShoutOutItem from "./ShoutOutItem";
import "./ShoutOutsList.css";

interface Props {
  shoutOuts: ShoutOut[];
}

const ShoutOutsList = ({ shoutOuts }: Props) => {
  return (
    <ul className="ShoutOutsList">
      {shoutOuts.map((item) => (
        <ShoutOutItem item={item} key={item?._id} />
      ))}
    </ul>
  );
};

export default ShoutOutsList;
