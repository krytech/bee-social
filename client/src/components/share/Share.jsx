import "./share.css"
import { PermMedia, Label, EmojiEmotions, Room } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/people/1.jpeg" alt="" />
          <input placeholder="Share with the hive..." className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="Green" className="shareIcon"/>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="Blue" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="Red" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="orange" className="shareIcon"/>
              <span className="shareOptionText">Emoji</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
