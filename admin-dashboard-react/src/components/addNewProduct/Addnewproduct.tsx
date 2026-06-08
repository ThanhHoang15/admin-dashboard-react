import { GridColDef } from "@mui/x-data-grid";
import "./addNewProduct.scss";
import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
  slug: string;
  column: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Addnewproduct = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };



  return (
    <div className="addNewProduct" onClick={() => props.setOpen(false)}>   
      <div className="modal" onClick={(e) => e.stopPropagation()}>          


        <div className="close" onClick={() => props.setOpen(false)}>
          x
        </div>

        <div className="label">Add new product</div>


        <form action="" className="newProductInfo" onSubmit={handleSubmit}>
          {props.column
            .filter((filter) => {
              return (
                filter.headerName != "ID" &&
                filter.headerName != "Action"
                );
            })
            .map((column) => {
              return (
                <div className="item" key={column.field}>
                  <div className="headerLabel"> {column.headerName}</div>
                  <input
                    name={column.field}
                    type={column.type}
                    placeholder={column.field}
                    className="userInput"
                  />
                </div>
              );
            })}
          <button> Send </button>
        </form>
      </div>
    </div>
  );
};
