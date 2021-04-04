import "./sidebar.css";

const SidebarChannels = ({ channel }) => {

  console.log(channel)

  return (
    <div className="sidebarChannels">
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channel.channel.name}
      </h4>
    </div>
  );
};

export default SidebarChannels;
