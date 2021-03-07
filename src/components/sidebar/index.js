// css component
import "./sidebar.css";
// icons
import { ExpandMore, Add, SignalCellularAlt } from "@material-ui/icons";
// components
import SidebarChannels from "./SidebarChannels"

// FIXME: ME QUEDE EN 1:01 HRS

const Sidebar = () => {
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
            <SidebarChannels/>
            <SidebarChannels/>
            <SidebarChannels/>
            <SidebarChannels/>
        </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon"
        fontSize="large"
        />
        <div className="sidebar__voiceInfo">
           <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
