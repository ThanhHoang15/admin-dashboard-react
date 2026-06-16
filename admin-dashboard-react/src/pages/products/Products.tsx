
import { Datagrid } from "../../components/dataGrid/Datagrid";
import { productColumns, productRows} from "../../data";
import "./products.scss";

import { useState } from "react";
import { Addnewproduct } from "../../components/addNewProduct/Addnewproduct";





export const Products = () => {
  const [open, setOpen] = useState(false)




  return (
    <div className="products">
      <div className="productContainer">
        <div className="label">Product</div>
        <div className="addButton" onClick={() => setOpen(true)}>Add New Product</div>
      </div>
      <Datagrid columns={productColumns} rows={productRows} />
      {open && <Addnewproduct slug="product" column={productColumns} setOpen={setOpen}/>}
    </div>
  );
};
