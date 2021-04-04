import "./sidebar.css";
// redux
import { setChannelInfo } from "../../features/appSlice";
import { useDispatch } from "react-redux";

const SidebarChannels = ({ id, channelName }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
      className="sidebarChannels"
    >
      <h4>
        <span className="sidebarChannel_hash">#</span>
        {channelName}
      </h4>
    </div>
  );
};

export default SidebarChannels;
