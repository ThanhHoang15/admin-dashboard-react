
import "./user.scss"
import { Single } from "../../components/single/Single";
import { useParams } from "react-router-dom";

export const users = [
  {
    id: 1,
    title: "Daenerys Targaryen",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: "dragonqueen",
      fullname: "Daenerys Targaryen",
      email: "daenerys@dragonstone.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 4200, clicks: 2300 },
        { name: "Mon", visits: 3900, clicks: 2800 },
        { name: "Tue", visits: 4500, clicks: 3100 },
        { name: "Wed", visits: 4800, clicks: 3400 },
        { name: "Thu", visits: 4100, clicks: 2900 },
        { name: "Fri", visits: 5200, clicks: 3900 },
        { name: "Sat", visits: 6100, clicks: 4500 },
      ],
    },
    activities: [
      {
        text: "Daenerys purchased a Dragon Egg",
        time: "2 days ago",
      },
      {
        text: "Daenerys added 3 items into wishlist",
        time: "1 week ago",
      },
    ],
  },

  {
    id: 2,
    title: "Jon Snow",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: "thenorth",
      fullname: "Jon Snow",
      email: "jon@winterfell.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 2500, clicks: 1200 },
        { name: "Mon", visits: 2800, clicks: 1600 },
        { name: "Tue", visits: 3200, clicks: 1900 },
        { name: "Wed", visits: 3000, clicks: 1700 },
        { name: "Thu", visits: 3500, clicks: 2100 },
        { name: "Fri", visits: 3800, clicks: 2400 },
        { name: "Sat", visits: 4300, clicks: 2700 },
      ],
    },
    activities: [
      {
        text: "Jon Snow purchased Longclaw",
        time: "3 days ago",
      },
      {
        text: "Jon Snow reviewed a product",
        time: "1 week ago",
      },
    ],
  },

  {
    id: 3,
    title: "Jaime Lannister",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: "kingslayer",
      fullname: "Jaime Lannister",
      email: "jaime@casterlyrock.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 3100, clicks: 1700 },
        { name: "Mon", visits: 3400, clicks: 2000 },
        { name: "Tue", visits: 3700, clicks: 2200 },
        { name: "Wed", visits: 4000, clicks: 2500 },
        { name: "Thu", visits: 3900, clicks: 2400 },
        { name: "Fri", visits: 4500, clicks: 3000 },
        { name: "Sat", visits: 4700, clicks: 3300 },
      ],
    },
    activities: [
      {
        text: "Jaime purchased Golden Armor",
        time: "5 days ago",
      },
      {
        text: "Jaime added an item to wishlist",
        time: "2 weeks ago",
      },
    ],
  },

  {
    id: 4,
    title: "Arya Stark",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: "noone",
      fullname: "Arya Stark",
      email: "arya@winterfell.com",
      phone: "123 456 789",
      status: "pending",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 1800, clicks: 800 },
        { name: "Mon", visits: 2200, clicks: 1100 },
        { name: "Tue", visits: 2500, clicks: 1400 },
        { name: "Wed", visits: 2700, clicks: 1600 },
        { name: "Thu", visits: 3000, clicks: 1900 },
        { name: "Fri", visits: 3400, clicks: 2200 },
        { name: "Sat", visits: 4100, clicks: 2900 },
      ],
    },
    activities: [
      {
        text: "Arya purchased Needle",
        time: "1 day ago",
      },
      {
        text: "Arya reviewed a product",
        time: "6 days ago",
      },
    ],
  },

  {
    id: 5,
    title: "Cersei Lannister",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    info: {
      username: "queenregent",
      fullname: "Cersei Lannister",
      email: "cersei@casterlyrock.com",
      phone: "123 456 789",
      status: "banned",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 5200, clicks: 2800 },
        { name: "Mon", visits: 4900, clicks: 2600 },
        { name: "Tue", visits: 5500, clicks: 3100 },
        { name: "Wed", visits: 6000, clicks: 3600 },
        { name: "Thu", visits: 5700, clicks: 3400 },
        { name: "Fri", visits: 6300, clicks: 4000 },
        { name: "Sat", visits: 7100, clicks: 4800 },
      ],
    },
    activities: [
      {
        text: "Cersei purchased Wine Collection",
        time: "2 days ago",
      },
      {
        text: "Cersei added 5 items into wishlist",
        time: "1 week ago",
      },
    ],
  },
];


  







export const User = () => {
  const { id } = useParams();

  const user = users.find(            //users.find --> take array --> return an entire object element in  Array
    (u) => u.id === Number(id)       
  );

  if (!user) return <div>User not found</div>;
  else
  return (
    <div>
      <Single user={user} />
    </div>
  );
};
