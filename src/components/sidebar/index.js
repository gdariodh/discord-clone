import React, { useState, useEffect } from "react";
// css component
import "./sidebar.css";
// icons
import {
  ExpandMore,
  Add,
  SignalCellularAlt,
  InfoOutlined,
  Call,
  Mic,
  Headset,
  Settings,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
// components
import SidebarChannels from "./SidebarChannels";
// redux
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import db from "../../firebase";

const Sidebar = () => {
  // get user for the photoAvatar
  const user = useSelector(selectUser);

  const [channels, setChannels] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [channelName, setChannelName] = useState("");

  // FIXME: 2:25

  useEffect(() => {
    db.collection("channels")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) => {
        setChannels(
          // retornar objeto nuevo con esos atributos, doc.data() sirve para sacar la data
          snapshot.docs.map((doc) => ({
            id: doc.id,
            channel: doc.data(),
          }))
        );
      });
  }, [showInput]);

  const handleShowInput = () => setShowInput(!showInput);

  const handleCreateChannel = (e) => {
    e.preventDefault();

    if (!channelName) alert("ChannelName is Required");

    // crear nuevo doc y  agregar a firestore el nuevo channel
    db.collection("channels").add({
      channelName,
      creator: user,
      created: new Date(),
    });

    setShowInput(false);
    setChannelName("")
  };


  return (
    <>
      {/* usamos BEM */}
      <aside className="sidebar">
        <div className="sidebar__top">
          <h3>Discord Clone by gdariodh </h3>
          <ExpandMore className="sidebar__expandMore" />
        </div>
        <div className="sidebar__channel">
          <div className="sidebar__channelsHeader">
            {showInput ? (
              <div className="sidebar__headerInput">
                <ExpandMore
                  onClick={() => handleShowInput()}
                  className="sidebar__expandMore"
                />
                <form
                  className="sidebar__headerInput"
                  onSubmit={(e) => handleCreateChannel(e)}
                >
                  <input
                    onChange={(e) => setChannelName(e.target.value)}
                    className="sidebar__headerInput1"
                    type="text"
                    placeholder={`"Hello world"`}
                  />
                  <button type="submit">Add Channel</button>
                </form>
              </div>
            ) : (
              <>
                <div className="sidebar__header">
                  <ExpandMore className="sidebar__expandMore" />
                  <h4>Text Channels</h4>
                </div>
                <Add
                  onClick={() => handleShowInput()}
                  className="sidebar__addChannel"
                />
              </>
            )}
          </div>

          <div className="sidebar__channelsList">
            {channels &&
              channels.map((channel, id) => (
                <SidebarChannels
                  key={id}
                  id={channel.id}
                  channelName={channel.channel.channelName}
                />
              ))}
          </div>
        </div>

        <div className="sidebar__voice">
          <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>

          <div className="sidebar__voiceIcons">
            <InfoOutlined />
            <Call />
          </div>
        </div>

        <div className="sidebar__profile">
          <Avatar src={user.photo} />
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            {/* cerrar sesion */}
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>

          <div className="sidebar__profileIcons">
            <Mic />
            <Headset />
            <Settings />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
