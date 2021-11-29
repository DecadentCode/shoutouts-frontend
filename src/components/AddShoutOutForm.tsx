import { FormEvent, useState } from "react";
import ShoutOut from "../models/ShoutOut";
import "./AddShoutOutForm.css";

interface Props {
  addShoutOutHandler: (shoutOut: ShoutOut) => void;
  recipient?: string;
}

const AddShoutOutForm = ({ addShoutOutHandler, recipient }: Props) => {
  const [to, setTo] = useState(recipient || "");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    addShoutOutHandler({ to, from, message });
  };

  return (
    <form className="AddShoutOutForm" onSubmit={submitHandler}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button>Add ShoutOut</button>
    </form>
  );
};

export default AddShoutOutForm;
