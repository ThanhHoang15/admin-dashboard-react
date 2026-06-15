import { useState } from "react";
import { Adduser } from "../../components/addUser/Adduser";
import "./profile.scss";
import { columns } from "../../data";

export const adminFeedData = [
  {
    id: 1,
    name: "Ben Carter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    title: "User",
    date: "Today at 9:53 AM",
    action: "created a new account",
    product: null,
    coworker: null,
  },
  {
    id: 2,
    name: "Mia Chen",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    title: "Sales Manager",
    date: "Today at 8:30 AM",
    action: "created a new sale order",
    product: "iPhone 15 Pro",
    coworker: null,
  },
  {
    id: 3,
    name: "Carlos Rivera",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    title: "Production Supervisor",
    date: "Yesterday at 4:12 PM",
    action: "approved product for production",
    product: "MacBook Pro 14",
    coworker: null,
  },
  {
    id: 4,
    name: "Eleanor Smith",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    title: "Inventory Manager",
    date: "Yesterday at 2:45 PM",
    action: "updated stock quantity",
    product: "Samsung Galaxy S24",
    coworker: null,
  },
  {
    id: 5,
    name: "Sylvia Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    title: "Admin",
    date: "Monday at 11:20 AM",
    action: "added a new coworker",
    product: null,
    coworker: "David Kim",
  },
  {
    id: 6,
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    title: "Salesman",
    date: "Monday at 9:10 AM",
    action: "completed a customer sale",
    product: "Nike Running Shoes",
    coworker: null,
  },
  {
    id: 7,
    name: "Linda Brown",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    title: "Warehouse Worker",
    date: "Sunday at 6:30 PM",
    action: "packed product for delivery",
    product: "Coffee Mug",
    coworker: null,
  },
  {
    id: 8,
    name: "Robert Wilson",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    title: "Product Manager",
    date: "Saturday at 3:05 PM",
    action: "changed product price",
    product: "Apple Watch Series 9",
    coworker: null,
  },
  {
    id: 9,
    name: "Anna Lee",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    title: "Customer Support",
    date: "Friday at 1:18 PM",
    action: "contacted coworker about customer issue",
    product: null,
    coworker: "Mia Chen",
  },
  {
    id: 10,
    name: "Mark Johnson",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    title: "Production Worker",
    date: "Thursday at 10:00 AM",
    action: "reported product defect",
    product: "Dell XPS 13",
    coworker: null,
  },
];

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

export const adminProfile = {
  id: 1,
  name: "Peter Hoang",
  username: "PeterHoang1122",
  avatar: "/avatar.jpg",
  title: "Admin",
  email: "thanh.hoang@email.com",
  phone: "(323) 555-0198",
  location: "Los Angeles, CA",
  joinedDate: "January 15, 2024",
  lastLogin: "Today at 9:53 AM",
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
