import { useState } from "react";
import "./navbar.scss";
import { notificationData } from "../../data";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const unreadCount = notificationData.filter((item) => !item.isRead).length;

  return (
    <div className="navbar">
      <Link to ="/" className="logo">
        <img src="logo2.jpg" alt="logo" />
        <span>THANH HOANG</span>
      </Link>

      <div className="icons">
        <div className="notifications" onClick={() => setOpen(!open)}>
          <img src="notifications.svg" alt="notifications" />
          {!open && <span>{unreadCount}</span>}

          {open && (
            <div className="notificationDropdown">
              <h3>Notifications</h3>

              {notificationData.map((item) => (
                <div
                  className={
                    item.isRead ? "notificationItem" : "notificationItem unread"
                  }
                  key={item.id}
                >
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.message}</p>
                    <small>{item.time}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Link to="/profile" className="user">
          <img src="avatar.jpg" alt="avatar" />
          <span>Peter</span>
        </Link>

        <img src="setting.svg" alt="settings" />
      </div>
    </div>
  );
};
