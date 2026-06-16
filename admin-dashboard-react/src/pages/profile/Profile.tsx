import { useState } from "react";
import { Adduser } from "../../components/addUser/Adduser";
import "./profile.scss";
import {
  adminFeedData,
  adminProfile,
  columns,
  productColumns,
} from "../../data";
import { Addnewproduct } from "../../components/addNewProduct/Addnewproduct";
import { View } from "../../components/view/View";

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
  const [openUser, setOpenUser] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState<AdminFeedItem | null>(null);

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
          <div className="joinedDate">
            Joined Date: {adminProfile.joinedDate}
          </div>
          <div className="lastLogin">last Login: {adminProfile.lastLogin}</div>
        </div>
        <div className="addButton">
          <button className="addButtonUser" onClick={() => setOpenUser(true)}>
            Add New User
          </button>
          <button
            className="addButtonProduct"
            onClick={() => setOpenProduct(true)}
          >
            Add New Product
          </button>
        </div>
        {openUser && (
          <Adduser slug="user" column={columns} setOpen={setOpenUser} />
        )}
        {openProduct && (
          <Addnewproduct
            slug="product"
            column={productColumns}
            setOpen={setOpenProduct}
          />
        )}
      </div>

      <div className="feed">
        <div className="header">Feed: </div>
        {adminFeedData.map((item: AdminFeedItem) => {
          return (
            <div key={item.id} className="feedInfo">
              <div className="feedInfo1">
                <div className="feedProfile">
                  <img src={item.avatar} alt="avatar" className="feedAvatar" />
                  <div className="feedNameTitle">
                    <div className="feedName">{item.name}</div>
                    <div className="feedTitle">{item.title}</div>
                  </div>
                </div>
              </div>
              <div className="feedInfo2">
                <div className="feedAction">{item.action}</div>
                <div className="feedProduct">{item.product}</div>
                <div className="feedDate">{item.date}</div>
              </div>

              <button
                className="editButton"
                onClick={() => setSelectedFeed(item)}
              >
                View
              </button>
            </div>
          );
        })}
        {selectedFeed && (
          <View item={selectedFeed} setSelectedFeed={setSelectedFeed} />
        )}
      </div>
    </div>
  );
};
