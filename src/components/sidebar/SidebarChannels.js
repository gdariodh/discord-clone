import "./sidebar.css";

const SidebarChannels = ({ channel }) => {


  return (
    <div className="sidebarChannels">
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannels;
