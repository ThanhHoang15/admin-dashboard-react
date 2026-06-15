import { GridColDef } from "@mui/x-data-grid";
import "./addUser.scss";
import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
  slug: string;
  column: GridColDef[];
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Adduser = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="addUser" onClick={() => props.setOpen(false)}>  
      <div className="modal" onClick={(e) => e.stopPropagation()}>  
        <div className="close" onClick={() => props.setOpen(false)}>
          X
        </div>
        <div className="title">Add new user</div>
        <form action="" className="newUserInfo" onSubmit={handleSubmit}>
          <div className="allField">
            {props.column
              .filter((filter) => {
                return (
                  filter.headerName != "ID" &&
                  filter.headerName != "Action" &&
                  filter.headerName != "Age"
                );
              })
              .map((column) => {
                return (
                  <div className="userBox" key={column.field}>
                    <div className="label"> {column.headerName}</div>
                    <input
                      name={column.field}
                      type={column.type}
                      placeholder={column.field}
                      className="userInput"
                    />
                  </div>
                );
              })}
            <label className="uploadImg">
              <div>Upload Avatar Image:</div>
              <img src="img.svg" alt="" />
              <input type="file" accept="image*" style={{ display: "none" }} />
            </label>
          </div>

          <button> Send </button>
        </form>
      </div>
    </div>
  );
};
