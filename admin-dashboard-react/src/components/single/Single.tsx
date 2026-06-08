import "./single.scss"


type Props = {

user: {
    id: number;
    title: string;
    img: string;
    info: {
        username: string;
        fullname: string;
        email: string;
        phone: string;
        status: string;
    };
    chart: {
        dataKeys: {
            name: string;
            color: string;
        }[];
        data: {
            name: string;
            visits: number;
            clicks: number;
        }[];
    };
    activities: {
        text: string;
        time: string;
    }[];
}
}







export const Single = ( props : Props) => {
  return (
    <div>
      <img src={props.user.img} alt="" />
      <h1>{props.user.title}</h1>
    </div>
  );
};
