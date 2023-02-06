import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Event,
  Bookmark,
  WorkOutline,
  School,
  HelpOutline,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import Friends from "../friends/Friends";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemText">Chat</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Learn more</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Help</span>
          </li>
        </ul>
        <button className="leftbarButton">Show more</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendsList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
