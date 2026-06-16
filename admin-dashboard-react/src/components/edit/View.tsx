
import "./view.scss"

type ViewProps = {
  setOpenView: React.Dispatch<React.SetStateAction<boolean>>;
};



export const View = ({setOpenView} : ViewProps) => {
    return (
        <div className="view" onClick={() => setOpenView(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="close" onClick={() => setOpenView(false)}>X</div>
                <div className="labelInfo">
                    <div></div>
                </div>




            </div>

        </div>
    )
}
