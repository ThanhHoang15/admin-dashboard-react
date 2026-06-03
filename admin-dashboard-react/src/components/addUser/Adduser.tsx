import { GridColDef } from "@mui/x-data-grid"
import "./addUser.scss"
import { Dispatch, FormEvent, SetStateAction } from "react";

type Props = {
    slug: string,
    column: GridColDef[],
    setOpen: Dispatch<SetStateAction<boolean>>;
}



export const Adduser = (props : Props) => {

     const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        
    }

  return (
  


    <div className="addUser">
        <div className="modal">
            <div className="close" onClick={() => props.setOpen(false)}>x</div>
            <div className="label">Add new user</div>
        <form action="" className="newUserinfo" onSubmit={handleSubmit}>
                {props.column.filter(filter => {
                    return(
                        filter.headerName != "ID" && filter.headerName != "Action" && filter.headerName != "Age"
                    );
                }
                ).map(column => {
                    return(
        
                      <div className="item" key={column.field}>
                            <div className="label"> {column.headerName}</div>
                            <input name={column.field} type= {column.type} placeholder= {column.field} className="userInput" />
        
        
                        </div>
                    );
                }
                )}
           <button> Send </button>
           </form>
        </div>
    </div>
  )
}
