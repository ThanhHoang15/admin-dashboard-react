
import "./product.scss"
import { Single } from "../../components/single/Single";
import { useParams } from "react-router-dom";
import { singleProduct } from "../../data";

export const Product = () => {
  const {id} = useParams();

  const product = singleProduct.find(item => {
    return(
      item.id === Number(id)
    )
  })
  if(!product) return <h1>User Not Found</h1>

  else
   
  return (
    <div>
      <Single user = {product}/>
    </div>
  )
}