import "./message.css";
// icons
import { Avatar } from "@material-ui/core";

const Message = ({ message }) => {
  const { user, timestamp } = message;
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          {" "}
          {user.displayName}
          <span className="message__timestamp">
            {/* transformar timestamp de firebase a fecha */}
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
