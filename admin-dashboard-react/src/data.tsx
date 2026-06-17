import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";


export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/Profile",
        icon: "user.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Management",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
    ],
  },

  {
    id: 3,
    title: "maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
    ],
  },
];


export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Sophia Turner",
    email: "sophia@gmail.com",
    amount: "1.432",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Michael Scott",
    email: "michael@gmail.com",
    amount: "1.278",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Emma Wilson",
    email: "emma@gmail.com",
    amount: "1.104",
  },
];


export const chartBoxUser = {
  color: "#8884d8",
  icon: "/user.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,

  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};


export const barChartLeft = [
  { month: 'Jan', users: 4031 },
  { month: 'Feb', users: 3767 },
  { month: 'Mar', users: 2023 },
  { month: 'Apr', users: 2780 },
  { month: 'May', users: 1891 },
  { month: 'Jun', users: 2394 },
  { month: 'Jul', users: 2191 },
  { month: 'Aug', users: 3466 },
  { month: 'Sept', users: 8492 },
  { month: 'Oct', users: 4292 },
  { month: 'Nov', users: 6793 },
  { month: 'Dec', users: 3591 },

]

export const barChartRight = [
  { month: 'Jan', profit: 43314 },
  { month: 'Feb', profit: 13767 },
  { month: 'Mar', profit: 20233 },
  { month: 'Apr', profit: 27802 },
  { month: 'May', profit: 12891 },
  { month: 'Jun', profit: 52394 },
  { month: 'Jul', profit: 22191 },
  { month: 'Aug', profit: 34666 },
  { month: 'Sept', profit: 28492 },
  { month: 'Oct', profit: 24292 },
  { month: 'Nov', profit: 56793 },
  { month: 'Dec', profit: 43591 },
]





export const revenueChart = [
  {
    day: 'Mon',
    mobile: 4000,
    desktop: 2400,
    tablet: 1200,
  },
  {
    day: 'Tue',
    mobile: 3000,
    desktop: 9800,
    tablet: 1500,
  },
  {
    day: 'Wed',
    mobile: 2500,
    desktop: 4200,
    tablet: 1800,
  },
  {
    day: 'Thu',
    mobile: 3800,
    desktop: 3100,
    tablet: 2200,
  },
  {
    day: 'Fri',
    mobile: 4200,
    desktop: 2700,
    tablet: 2400,
  },
  {
    day: 'Sat',
    mobile: 5000,
    desktop: 3900,
    tablet: 2800,
  },
  {
    day: 'Sun',
    mobile: 3200,
    desktop: 2100,
    tablet: 1600,
  },
]
export const chartBoxRevenue = {
  color: "#36A2EB",
  icon: "/post2.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: 12,

  chartData: [
    { name: "Sun", revenue: 3200 },
    { name: "Mon", revenue: 4100 },
    { name: "Tue", revenue: 3800 },
    { name: "Wed", revenue: 5200 },
    { name: "Thu", revenue: 4700 },
    { name: "Fri", revenue: 3900 },
    { name: "Sat", revenue: 3500 },
  ],
};

export const chartBoxProducts = {
  color: "#FFBB28",
  icon: "/log.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,

  chartData: [
    { name: "Sun", products: 120 },
    { name: "Mon", products: 180 },
    { name: "Tue", products: 160 },
    { name: "Wed", products: 220 },
    { name: "Thu", products: 190 },
    { name: "Fri", products: 240 },
    { name: "Sat", products: 210 },
  ],
};

export const chartBoxRatio = {
  color: "#82ca9d",
  icon: "/search.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: -4,

  chartData: [
    { name: "Sun", ratio: 1.2 },
    { name: "Mon", ratio: 1.8 },
    { name: "Tue", ratio: 1.5 },
    { name: "Wed", ratio: 0.9 },
    { name: "Thu", ratio: 0.5 },
    { name: "Fri", ratio: 0.7 },
    { name: "Sat", ratio: 0.8 },
  ],
};


export const userRows = [
  {
  id: 1,
  img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Targaryen",
  firstName: "Daenerys",
  email: "daenerys@dragonstone.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 2,
  img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Snow",
  firstName: "Jon",
  email: "jon@winterfell.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 3,
  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Lannister",
  firstName: "Jaime",
  email: "jaime@casterlyrock.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 4,
  img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Stark",
  firstName: "Arya",
  email: "arya@winterfell.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 5,
  img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Lannister",
  firstName: "Cersei",
  email: "cersei@casterlyrock.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 6,
  img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Baratheon",
  firstName: "Stannis",
  email: "stannis@dragonstone.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 7,
  img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Tyrell",
  firstName: "Margaery",
  email: "margaery@highgarden.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 8,
  img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Martell",
  firstName: "Oberyn",
  email: "oberyn@dorne.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 9,
  img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Greyjoy",
  firstName: "Yara",
  email: "yara@pyke.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
 {
  id: 10,
  img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Stark",
  firstName: "Sansa",
  email: "sansa@winterfell.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 11,
  img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Stark",
  firstName: "Bran",
  email: "bran@winterfell.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 12,
  img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Stark",
  firstName: "Robb",
  email: "robb@winterfell.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 13,
  img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Snow",
  firstName: "Ygritte",
  email: "ygritte@wildlings.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 14,
  img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Targaryen",
  firstName: "Viserys",
  email: "viserys@dragonstone.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 15,
  img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Lannister",
  firstName: "Tyrion",
  email: "tyrion@casterlyrock.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 16,
  img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Baratheon",
  firstName: "Robert",
  email: "robert@kingslanding.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
{
  id: 17,
  img: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Greyjoy",
  firstName: "Theon",
  email: "theon@pyke.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 18,
  img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Mormont",
  firstName: "Jorah",
  email: "jorah@bearisland.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: true,
},
{
  id: 19,
  img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
  lastName: "Bolton",
  firstName: "Ramsay",
  email: "ramsay@dreadfort.com",
  phone: "123 456 789",
  createdAt: "01.02.2023",
  verified: false,
},
  ];
 export const productRows = [
{
  id: 1,
  img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
  title: "iPhone 15 Pro",
  color: "Titanium",
  producer: "Apple",
  price: "$999",
  createdAt: "01.02.2023",
  stock: 125,
},
{
  id: 2,
  img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  title: "Running Shoes",
  color: "Blue",
  producer: "Nike",
  price: "$120",
  createdAt: "02.02.2023",
  stock: 84,
},
{
  id: 3,
  img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  title: "Coffee Mug",
  color: "White",
  producer: "IKEA",
  price: "$15",
  createdAt: "03.02.2023",
  stock: 230,
},
{
  id: 4,
  img: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  title: "Office Chair",
  color: "Black",
  producer: "Herman Miller",
  price: "$799",
  createdAt: "04.02.2023",
  stock: 12,
},
{
  id: 5,
  img: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
  title: "Backpack",
  color: "Gray",
  producer: "North Face",
  price: "$89",
  createdAt: "05.02.2023",
  stock: 56,
},
{
  id: 6,
  img: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg",
  title: "Headphones",
  color: "Black",
  producer: "Sony",
  price: "$299",
  createdAt: "06.02.2023",
  stock: 41,
},
{
  id: 7,
  img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
  title: "Camera",
  color: "Black",
  producer: "Canon",
  price: "$1199",
  createdAt: "07.02.2023",
  stock: 7,
},
{
  id: 8,
  img: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg",
  title: "Mountain Bike",
  color: "Red",
  producer: "Trek",
  price: "$1499",
  createdAt: "08.02.2023",
  stock: 18,
},
{
  id: 9,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
  title: "Desk Lamp",
  color: "White",
  producer: "Philips",
  price: "$45",
  createdAt: "09.02.2023",
  stock: 94,
},
{
  id: 10,
  img: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
  title: "Wrist Watch",
  color: "Silver",
  producer: "Seiko",
  price: "$350",
  createdAt: "10.02.2023",
  stock: 23,
},
{
  id: 11,
  img: "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg",
  title: "Gaming Keyboard",
  color: "Black",
  producer: "Logitech",
  price: "$129",
  createdAt: "11.02.2023",
  stock: 67,
},
{
  id: 12,
  img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg",
  title: "Gaming Mouse",
  color: "Black",
  producer: "Razer",
  price: "$79",
  createdAt: "12.02.2023",
  stock: 49,
},
{
  id: 13,
  img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
  title: "Galaxy S24",
  color: "Black",
  producer: "Samsung",
  price: "$899",
  createdAt: "13.02.2023",
  stock: 38,
},
{
  id: 14,
  img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  title: "MacBook Pro",
  color: "Space Gray",
  producer: "Apple",
  price: "$1999",
  createdAt: "14.02.2023",
  stock: 11,
},
{
  id: 15,
  img: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg",
  title: "Bluetooth Speaker",
  color: "Blue",
  producer: "JBL",
  price: "$149",
  createdAt: "15.02.2023",
  stock: 73,
},
{
  id: 16,
  img: "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg",
  title: "Sunglasses",
  color: "Black",
  producer: "Ray-Ban",
  price: "$199",
  createdAt: "16.02.2023",
  stock: 31,
},
{
  id: 17,
  img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
  title: "Tablet",
  color: "Silver",
  producer: "Apple",
  price: "$599",
  createdAt: "17.02.2023",
  stock: 27,
},
{
  id: 18,
  img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
  title: "Sneakers",
  color: "White",
  producer: "Adidas",
  price: "$110",
  createdAt: "18.02.2023",
  stock: 88,
},
{
  id: 19,
  img: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg",
  title: "Leather Wallet",
  color: "Brown",
  producer: "Fossil",
  price: "$65",
  createdAt: "19.02.2023",
  stock: 52,
},
{
  id: 20,
  img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg",
  title: "4K Monitor",
  color: "Black",
  producer: "LG",
  price: "$399",
  createdAt: "20.02.2023",
  stock: 16,
},]

export const singleUser = [
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
        text: "Daenerys purchased an Ipad",
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


export const singleProduct = [
  {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "PS5SDF1156D",
      color: "White",
      price: "$499.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 4000, orders: 2400 },
        { name: "Mon", visits: 3000, orders: 1398 },
        { name: "Tue", visits: 2000, orders: 3800 },
        { name: "Wed", visits: 2780, orders: 3908 },
        { name: "Thu", visits: 1890, orders: 4800 },
        { name: "Fri", visits: 2390, orders: 3800 },
        { name: "Sat", visits: 3490, orders: 4300 },
      ],
    },
    activities: [
      { text: "John Doe purchased Playstation 5", time: "3 days ago" },
      { text: "Jane Doe added Playstation 5 to wishlist", time: "1 week ago" },
    ],
  },

  {
    id: 2,
    title: "Xbox Series X",
    img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
    info: {
      productId: "XBSX2258",
      color: "Black",
      price: "$499.99",
      producer: "Microsoft",
      export: "USA",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 3500, orders: 1800 },
        { name: "Mon", visits: 3700, orders: 2000 },
        { name: "Tue", visits: 3900, orders: 2200 },
        { name: "Wed", visits: 4200, orders: 2500 },
        { name: "Thu", visits: 4500, orders: 2700 },
        { name: "Fri", visits: 4900, orders: 3000 },
        { name: "Sat", visits: 5300, orders: 3400 },
      ],
    },
    activities: [
      { text: "Mike purchased Xbox Series X", time: "2 days ago" },
      { text: "Sarah reviewed Xbox Series X", time: "5 days ago" },
    ],
  },

  {
    id: 3,
    title: "Nintendo Switch OLED",
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800",
    info: {
      productId: "NSOLED778",
      color: "White",
      price: "$349.99",
      producer: "Nintendo",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 2800, orders: 1200 },
        { name: "Mon", visits: 3000, orders: 1400 },
        { name: "Tue", visits: 3300, orders: 1700 },
        { name: "Wed", visits: 3500, orders: 1800 },
        { name: "Thu", visits: 3900, orders: 2100 },
        { name: "Fri", visits: 4300, orders: 2600 },
        { name: "Sat", visits: 4700, orders: 2900 },
      ],
    },
    activities: [
      { text: "Anna purchased Nintendo Switch OLED", time: "1 day ago" },
      { text: "Chris added Nintendo Switch OLED to wishlist", time: "4 days ago" },
    ],
  },

  {
    id: 4,
    title: "Apple AirPods Pro",
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800",
    info: {
      productId: "APPRO9921",
      color: "White",
      price: "$249.99",
      producer: "Apple",
      export: "China",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 5200, orders: 2600 },
        { name: "Mon", visits: 5500, orders: 2900 },
        { name: "Tue", visits: 5800, orders: 3200 },
        { name: "Wed", visits: 6200, orders: 3600 },
        { name: "Thu", visits: 6000, orders: 3400 },
        { name: "Fri", visits: 6800, orders: 4100 },
        { name: "Sat", visits: 7400, orders: 4800 },
      ],
    },
    activities: [
      { text: "Alex purchased AirPods Pro", time: "6 hours ago" },
      { text: "Emma reviewed AirPods Pro", time: "2 days ago" },
    ],
  },

  {
    id: 5,
    title: "Samsung Galaxy S25",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    info: {
      productId: "SGS251234",
      color: "Titanium Gray",
      price: "$999.99",
      producer: "Samsung",
      export: "Korea",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        { name: "Sun", visits: 6100, orders: 3200 },
        { name: "Mon", visits: 6400, orders: 3500 },
        { name: "Tue", visits: 6800, orders: 3900 },
        { name: "Wed", visits: 7200, orders: 4200 },
        { name: "Thu", visits: 7000, orders: 4100 },
        { name: "Fri", visits: 7900, orders: 5000 },
        { name: "Sat", visits: 8500, orders: 5600 },
      ],
    },
    activities: [
      { text: "David purchased Galaxy S25", time: "12 hours ago" },
      { text: "Sophia added Galaxy S25 to wishlist", time: "3 days ago" },
    ],
  },
];


export const notificationData = [
  {
    id: 1,
    title: "New user registered",
    message: "Thanh Hoang just created an account.",
    time: "2 min ago",
    isRead: false,
  },
  {
    id: 2,
    title: "New order received",
    message: "Order #1024 is waiting for review.",
    time: "15 min ago",
    isRead: false,
  },
  {
    id: 3,
    title: "Server update",
    message: "Dashboard data was updated successfully.",
    time: "1 hour ago",
    isRead: true,
  },
];




export const columns: GridColDef[] = [
  //create a GridColDef array type --> store list of column
  { field: "id", headerName: "ID", width: 20 }, // adjust width of ID column here

  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />; //row is built in DataGrid --> params is an object contain row property
    },
    headerAlign: "center",
    align: "center",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150, // adjust width of first name column here
    type: "string",
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150, // adjust width of last name column here
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200, // adjust width of last name column here
    type: "string",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150, // adjust width of last name column here
    editable: true,
    type: "number",
    headerAlign:"left",
    align:"left",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150, // adjust width of last name column here
    editable: true,
  },
    {
    field: "verified",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/users/${params.row.id}`}>          
            <img src="/view.svg" alt="" />
          </Link>
          <div className="deleteUser">
            <img src="/delete.svg" alt=""/>
          </div>
        </div>
      );
    },
    headerAlign: "center",
  },
];


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


export const productColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "product",
    headerName: "Product",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="productWithImg">
          {/* <img src={params.row.img} alt="" className="cellImg" /> */}
          {params.row.title}
        </div>
      );
    },
  },

  {
    field: "color",
    headerName: "Color",
    width: 150,

  },

  {
    field: "producer",
    headerName: "Producer",
    width: 180,
  },

  {
    field: "price",
    headerName: "Price",
    width: 120,
  },

  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
  },

  {
    field: "stock",
    headerName: "Stock",
    width: 120,
  },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/products/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="deleteUser" >
            <img src="/delete.svg" alt=""/>
          </div>
        </div>
      );
    },
    headerAlign: "center",
  },
];





export const orderColumns: GridColDef[] = [
  {
    field: "orderId",
    headerName: "Order ID",
    width: 120,
  },
  {
    field: "productName",
    headerName: "Product Name",
    width: 180,
  },
  
  {
    field: "orderNumber",
    headerName: "Order Number",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return <span className={`status ${params.value}`}>{params.value}</span>;
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "customerName",
    headerName: "Customer Name",  
    width: 180,
  },
  {
    field: "shippingService",
    headerName: "Shipping Service",
    width: 180,
    renderCell: (params) => {
      return (
        <div className="shippingService">
          <span className={`dot ${params.value}`}></span>
          {params.value}
        </div>
      );
    },
  },
  {
    field: "trackingCode",
    headerName: "Tracking Code",
    width: 220,
  },
];

export const orderRows = [
  {
    id: 1,
    orderId: 59217,
    orderNumber: 59217342,
    status: "New order",
    productName: "iPhone 15 Pro",
    quantity: 1,
    customerName: "Cody Fisher",
    shippingService: "Standard",
    trackingCode: "940010109361300313",
  },
  {
    id: 2,
    orderId: 59213,
    orderNumber: 59217343,
    status: "Inproduction",
    productName: "Running Shoes",
    quantity: 2,
    customerName: "Kristin Watson",
    shippingService: "Priority",
    trackingCode: "940010109361300313",
  },
  {
    id: 3,
    orderId: 59219,
    orderNumber: 59217344,
    status: "Shipped",
    productName: "Coffee Mug",
    quantity: 12,
    customerName: "Esther Howard",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 4,
    orderId: 59220,
    orderNumber: 59217345,
    status: "Cancelled",
    productName: "Office Chair",
    quantity: 22,
    customerName: "Jenny Wilson",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 5,
    orderId: 59223,
    orderNumber: 59217346,
    status: "Rejected",
    productName: "Backpack",
    quantity: 32,
    customerName: "John Smith",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 6,
    orderId: 592182,
    orderNumber: 59217346,
    status: "Draft",
    productName: "Headphones",
    quantity: 41,
    customerName: "Cameron Williamson",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 7,
    orderId: 592182,
    orderNumber: 59217346,
    status: "Draft",
    productName: "Camera",
    quantity: 41,
    customerName: "Cameron Williamson",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 8,
    orderId: 592182,
    orderNumber: 59217347,
    status: "Draft",
    productName: "Mountain Bike",
    quantity: 41,
    customerName: "Cameron Williamson",
    shippingService: "Priority",
    trackingCode: "940010109361300313",
  },
  {
    id: 9,
    orderId: 592182,
    orderNumber: 59217347,
    status: "Draft",
    productName: "Desk Lamp",
    quantity: 41,
    customerName: "Cameron Williamson",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 10,
    orderId: 592182,
    orderNumber: 59217347,
    status: "Draft",
    productName: "Wrist Watch",
    quantity: 44,
    customerName: "Cameron Williamson",
    shippingService: "Express",
    trackingCode: "940010109361300313",
  },
  {
    id: 11,
    orderId: 592183,
    orderNumber: 59217348,
    status: "New order",
    productName: "Gaming Keyboard",
    quantity: 3,
    customerName: "Robert Fox",
    shippingService: "Standard",
    trackingCode: "940010109361300314",
  },
  {
    id: 12,
    orderId: 592184,
    orderNumber: 59217349,
    status: "Shipped",
    productName: "Gaming Mouse",
    quantity: 6,
    customerName: "Leslie Alexander",
    shippingService: "Priority",
    trackingCode: "940010109361300315",
  },
  {
    id: 13,
    orderId: 592185,
    orderNumber: 59217350,
    status: "Draft",
    productName: "Galaxy S24",
    quantity: 9,
    customerName: "Ronald Richards",
    shippingService: "Express",
    trackingCode: "940010109361300316",
  },
  {
    id: 14,
    orderId: 592186,
    orderNumber: 59217351,
    status: "Cancelled",
    productName: "MacBook Pro",
    quantity: 15,
    customerName: "Savannah Nguyen",
    shippingService: "Standard",
    trackingCode: "940010109361300317",
  },
  {
    id: 15,
    orderId: 592187,
    orderNumber: 59217352,
    status: "Inproduction",
    productName: "Bluetooth Speaker",
    quantity: 7,
    customerName: "Darlene Robertson",
    shippingService: "Priority",
    trackingCode: "940010109361300318",
  },
  {
    id: 16,
    orderId: 592188,
    orderNumber: 59217353,
    status: "Rejected",
    productName: "Sunglasses",
    quantity: 18,
    customerName: "Wade Warren",
    shippingService: "Express",
    trackingCode: "940010109361300319",
  },
  {
    id: 17,
    orderId: 592189,
    orderNumber: 59217354,
    status: "Shipped",
    productName: "Tablet",
    quantity: 24,
    customerName: "Brooklyn Simmons",
    shippingService: "Express",
    trackingCode: "940010109361300320",
  },
  {
    id: 18,
    orderId: 592190,
    orderNumber: 59217355,
    status: "New order",
    productName: "Mechanical Keyboard",
    quantity: 5,
    customerName: "Devon Lane",
    shippingService: "Standard",
    trackingCode: "940010109361300321",
  },
  {
    id: 19,
    orderId: 592191,
    orderNumber: 59217356,
    status: "Draft",
    productName: "Wireless Earbuds",
    quantity: 11,
    customerName: "Kathryn Murphy",
    shippingService: "Priority",
    trackingCode: "940010109361300322",
  },
  {
    id: 20,
    orderId: 592192,
    orderNumber: 59217357,
    status: "Shipped",
    productName: "Smart TV",
    quantity: 20,
    customerName: "Jacob Jones",
    shippingService: "Express",
    trackingCode: "940010109361300323",
  },
  {
    id: 21,
    orderId: 592193,
    orderNumber: 59217358,
    status: "Inproduction",
    productName: "Monitor",
    quantity: 13,
    customerName: "Courtney Henry",
    shippingService: "Standard",
    trackingCode: "940010109361300324",
  },
  {
    id: 22,
    orderId: 592194,
    orderNumber: 59217359,
    status: "Cancelled",
    productName: "USB-C Hub",
    quantity: 30,
    customerName: "Jerome Bell",
    shippingService: "Priority",
    trackingCode: "940010109361300325",
  },
  {
    id: 23,
    orderId: 592195,
    orderNumber: 59217360,
    status: "New order",
    productName: "Webcam",
    quantity: 4,
    customerName: "Floyd Miles",
    shippingService: "Express",
    trackingCode: "940010109361300326",
  },
  {
    id: 24,
    orderId: 592196,
    orderNumber: 59217361,
    status: "Draft",
    productName: "Portable SSD",
    quantity: 8,
    customerName: "Annette Black",
    shippingService: "Standard",
    trackingCode: "940010109361300327",
  },
  {
    id: 25,
    orderId: 592197,
    orderNumber: 59217362,
    status: "Rejected",
    productName: "Gaming Chair",
    quantity: 16,
    customerName: "Ralph Edwards",
    shippingService: "Priority",
    trackingCode: "940010109361300328",
  },
  {
    id: 26,
    orderId: 592198,
    orderNumber: 59217363,
    status: "Shipped",
    productName: "Drone",
    quantity: 27,
    customerName: "Jane Cooper",
    shippingService: "Express",
    trackingCode: "940010109361300329",
  },
  {
    id: 27,
    orderId: 592199,
    orderNumber: 59217364,
    status: "Inproduction",
    productName: "Printer",
    quantity: 14,
    customerName: "Albert Flores",
    shippingService: "Standard",
    trackingCode: "940010109361300330",
  },
  {
    id: 28,
    orderId: 592200,
    orderNumber: 59217365,
    status: "New order",
    productName: "External Hard Drive",
    quantity: 10,
    customerName: "Eleanor Pena",
    shippingService: "Priority",
    trackingCode: "940010109361300331",
  },
  {
    id: 29,
    orderId: 592201,
    orderNumber: 59217366,
    status: "Draft",
    productName: "Microphone",
    quantity: 19,
    customerName: "Guy Hawkins",
    shippingService: "Express",
    trackingCode: "940010109361300332",
  },
  {
    id: 30,
    orderId: 592202,
    orderNumber: 59217367,
    status: "Shipped",
    productName: "Laptop Stand",
    quantity: 25,
    customerName: "Theresa Webb",
    shippingService: "Standard",
    trackingCode: "940010109361300333",
  },
];