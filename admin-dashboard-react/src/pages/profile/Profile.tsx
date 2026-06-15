import { useState } from "react";
import { Adduser } from "../../components/addUser/Adduser";
import "./profile.scss";
import { adminFeedData, adminProfile, columns } from "../../data";

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


export const Profile = () => {

const [open, setOpen] = useState(false)

  return (
    <div className="profile">
      <div className="adminInfo">
        <div className="userInfo">
            <img
              src={adminProfile.avatar}
              alt={adminProfile.name}
              className="avatar"
            />
              <div className="userName">{adminProfile.name}</div>
        </div>

        <div className="info1">
          <div className="userName">Username: {adminProfile.username}</div>
          <div className="title">Title: {adminProfile.title}</div>
        </div>

        <div className="info2">
          <div className="email">Email: {adminProfile.email}</div>
          <div className="phone">Phone: {adminProfile.phone}</div>
          <div className="location">Location: {adminProfile.location}</div>
          <div className="joinedDate">Joined Date: {adminProfile.joinedDate}</div>
          <div className="lastLogin">last Login: {adminProfile.lastLogin}</div>
        </div>
        <div className="addThings">
          <div className="addButton" onClick={() => setOpen(true)}>Add New User</div>
          

        </div>
        {open && <Adduser slug="user" column={columns} setOpen={setOpen}/>}



      </div>

      <div className="feed">
        <div className="header">Feed</div>
        {adminFeedData.map((item: AdminFeedItem) => {
          return (
            <div key={item.id} className="feedInfo">
              <div className="feedInfo1">
                <img src={item.avatar} alt="avatar" className="feedAvatar" />
                <div className="nameTitle">
                  <div className="feedName">{item.name}</div>
                  <div className="feedTitle">{item.title}</div>
                </div>
              </div>

              <div className="feedInfo2">
                <div className="feedAction">{item.action}</div>
                <div className="feedProduct">{item.product}</div>
                <div className="feedDate">{item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
