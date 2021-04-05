import React, { useEffect, useState } from "react";
// css component
import "./chat.css";
// components
import ChatHeader from "./ChatHeader";
import Message from "./Message";
// icons
import {
  AddCircle,
  CardGiftcard,
  Gif,
  EmojiEmotions,
} from "@material-ui/icons";
// redux
import { selectUser } from "../../features/userSlice";
import { selectChannelId, selectChannelName } from "../../features/appSlice";
import { useSelector } from "react-redux";
// firebase
import db from "../../firebase";
import firebase from "firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //   obtener msgs

    // agregamos condicional para evitar error
    if (channelId) {
      db.collection("channels")
        // indicamos cual channel queremos mediante el id del channel, para filtrar :)
        .doc(channelId)
        // nos vamos a la subCollection "messages" de la collection "channels"
        .collection("messages")
        // ordenamos por fecha de entrada
        .orderBy("timestamp", "desc")
        // accedemos a la info
        .onSnapshot((snapshot) =>
          // add data al state, doc.data() accede a la data
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [input, channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input) alert("Type a message :)");

    // agregar el nuevo mensaje a la subCollection "messages"
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      // en vez de usar new Date(), usamos este method de firebase para las fechas :)
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user,
    });
    // TODO: si no existe la subCollection de message, la crea y le agrega el nuevo mensaje :)

    setInput("");

    console.log(messages);
  };

  return (
    <main className="chat">
      {channelId ? (
        <>
          <ChatHeader channelName={channelName} />

          <div className="chat__messages">
            {messages.length > 0 && messages.map((message, id) => (
              <Message
                key={id}
                message={message}
              />
            ))}
          </div>

          <div className="chat__input">
            <AddCircle fontSize="large" />
            <form onSubmit={sendMessage}>
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                placeholder={`Message #${channelName}`}
              />
              <button className="chat__inputButton" type="submit">
                Send Message
              </button>
            </form>

            <div className="chat__inputIcons">
              <CardGiftcard />
              <Gif />
              <EmojiEmotions />
            </div>
          </div>
        </>
      ) : (
        <div className="chat__alert">
          <h3 className="chat__alertTitle">Hi welcome to the chat!!! 🦁</h3>
          <p className="chat__alertText">
            Select or create a channel for start ⏩
          </p>
        </div>
      )}
    </main>
  );
};

export default Chat;
