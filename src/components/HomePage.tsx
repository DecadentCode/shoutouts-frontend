import { useEffect, useState } from "react";
import ShoutOut from "../models/ShoutOut";
import { addShoutOut, getAllShoutOuts } from "../services/ShoutOutService";
import AddShoutOutForm from "./AddShoutOutForm";
import "./HomePage.css";
import ShoutOutsList from "./ShoutOutsList";

const HomePage = () => {
  const [shoutOuts, setShoutOuts] = useState<ShoutOut[]>([]);

  useEffect(() => {
    getAllShoutOutsHandler();
  }, []);

  const getAllShoutOutsHandler = (): void => {
    getAllShoutOuts().then((response) => {
      setShoutOuts(response);
    });
  };

  const addShoutOutHandler = (shoutOut: ShoutOut): void => {
    addShoutOut(shoutOut).then(() => {
      getAllShoutOutsHandler();
    });
  };

  return (
    <div className="HomePage">
      <h1>All Shout Outs</h1>
      <ShoutOutsList shoutOuts={shoutOuts} />
      <AddShoutOutForm addShoutOutHandler={addShoutOutHandler} />
    </div>
  );
};

export default HomePage;
