import { GridColDef } from "@mui/x-data-grid";
import { Datagrid } from "../../components/dataGrid/Datagrid";
import { productRows} from "../../data";
import "./products.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Addnewproduct } from "../../components/addNewProduct/Addnewproduct";



const handleClick = (id : number) => {
  return(
    console.log(`delete ID: ${id}`)
  )
}

const productColumns: GridColDef[] = [
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
          <div className="deleteUser" onClick={() => handleClick(params.row.id)} >
            <img src="/delete.svg" alt=""/>
          </div>
        </div>
      );
    },
    headerAlign: "center",
  },
];

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
