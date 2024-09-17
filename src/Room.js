import React, { useEffect, useState, useContext } from "react";
import { db } from "./config/firebase";
import { AuthContext } from "./AuthService";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const user = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      content: value,
      user: user.displayName,
    });
  };

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.date();
      });
      setMessages(messages);
    });
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => (
          <li>
            {message.user}:{message.content}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default Room;
