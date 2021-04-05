import './chatHeader.css'
// icons
import {
  Notifications,
  EditLocation,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
  HelpRounded,
} from "@material-ui/icons";


const ChatHeader = ({channelName}) => {

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
      {
        channelName ? <h3>
          <span className="chatHeader__hash">#</span>{channelName}
        </h3> : <h3>Select a channel</h3>
      }
       
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocation />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchRounded />
        </div>

        <SendRounded/>
        <HelpRounded/>
      </div>
    </div>
  );
};

export default ChatHeader;
