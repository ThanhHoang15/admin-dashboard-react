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
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },

  {
    id: 2,
    title: "lists",
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
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },

  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },

  {
    id: 4,
    title: "maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },

  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
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
  icon: "/userIcon.svg",
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