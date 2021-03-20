// icons
import {
  Notifications,
  EditLocation,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
  HelpRounded,
} from "@material-ui/icons";

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>Youtube
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocation />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input placeholderSearch placeholder="search" />
          <SearchRounded />
        </div>

        <SendRounded/>
        <HelpRounded/>
      </div>
    </div>
  );
};

export default ChatHeader;
