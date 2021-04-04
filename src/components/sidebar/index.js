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
  Settings
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
// components
import SidebarChannels from "./SidebarChannels";
// redux
import {selectUser} from '../../features/userSlice'
import {useSelector} from 'react-redux'
import { auth } from "../../firebase";

const Sidebar = () => {

  // get user for the photoAvatar
  const user = useSelector(selectUser)

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
            <div className="sidebar__header">
              <ExpandMore className="sidebar__expandMore" />
              <h4>Text Channels</h4>
            </div>

            <Add className="sidebar__addChannel" />
          </div>

          <div className="sidebar__channelsList">
            <SidebarChannels />
            <SidebarChannels />
            <SidebarChannels />
            <SidebarChannels />
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
        <Avatar src={user.photo}/>
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            {/* cerrar sesion */}
            <button onClick={() => auth.signOut()}>Logout</button>
          </div>

          <div className="sidebar__profileIcons">
             <Mic/>
             <Headset/>
             <Settings/>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
