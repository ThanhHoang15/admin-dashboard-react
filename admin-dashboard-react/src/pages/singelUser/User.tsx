
import "./user.scss"
import { Single } from "../../components/single/Single";
import { useParams } from "react-router-dom";
import { singleUser } from "../../data";


  




export const User = () => {
  const { id } = useParams();

  const user = singleUser.find(          
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
