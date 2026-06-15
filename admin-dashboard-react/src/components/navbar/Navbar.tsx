import { useState } from "react";
import "./navbar.scss";
import { notificationData } from "../../data";



export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const unreadCount = notificationData.filter((item) => !item.isRead).length;

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo2.jpg" alt="logo" />
        <span>THANH HOANG</span>
      </div>

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
                  key={item.id}>
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

        <div className="user">
          <img src="avatar.jpg" alt="avatar" />
          <span>Peter</span>
        </div>

        <img src="setting.svg" alt="settings" />
      </div>
    </div>
  );
};
