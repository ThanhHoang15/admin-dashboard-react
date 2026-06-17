import { NULL } from "sass";
import { adminProfile } from "../../data";
import "./view.scss";

type AdminFeedItem = {
  id: number;
  name: string;
  avatar: string;
  title: string;
  date: string;
  action: string;
  product: string | null;
  coworker: string | null;
};

type ViewProps = {
  item: AdminFeedItem;
  setSelectedFeed: React.Dispatch<React.SetStateAction<AdminFeedItem | null>>;
};

export const View = ({ item, setSelectedFeed }: ViewProps) => {
  return (
    <div className="view" onClick={() => setSelectedFeed(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={() => setSelectedFeed(null)}>
          X
        </div>

        <div className="labelInfo">
          <div className="sendToInfo">
            <div className="viewAdminInfo1">
              <img src={adminProfile.avatar} alt="" />
              <div className="adminNameTitle">
                <div>From: {adminProfile.name} </div>
                <div>Title: {adminProfile.title}</div>
              </div>
            </div>

            <div className="viewUserInfo1">
              <img src={item.avatar} alt={item.name} className="viewAvatar" />
              <div className="userNameTitle">
                To: {item.name}
                <div>Title: {item.title}</div>
              </div>
              <div className="userActivity">
                <div>Action: {item.action}</div>
                {item.product && <div>Product: {item.product}</div>}
                <div>Date: {item.date}</div>
              </div>
            </div>
            <form className="messageForm" onSubmit={(e) => e.preventDefault()}>
              <div className="text">Message:</div>

              <textarea
                className="messageBox"
                placeholder=" Write message..."
              ></textarea>

              <div className="sendButtonBox"><button type="submit" onClick={() => setSelectedFeed(null)}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
