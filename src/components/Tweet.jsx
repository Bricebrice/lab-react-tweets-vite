import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

// Tweet takes "props" as a parameter
function Tweet(props) {
  console.log(props);
  // destructuring props to extract "tweet" property and its object
  const {
    tweet: {
      message,
      timestamp,
      user: { handle, image, name },
    },
  } = props;
  // const { message, timestamp, user } = tweet;
  // const { handle, image, name } = user;

  return (
    <div className="tweet">
      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User name={name} handle={handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
