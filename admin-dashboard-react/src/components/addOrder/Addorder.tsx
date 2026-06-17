import "./addOrder.scss"


type Setopen = {

    setOpen: React.Dispatch<React.SetStateAction<boolean>>,

}




export const Addorder = ({ setOpen }: Setopen) => {
    return (
        <div className="addOrder" onClick={() => { setOpen(false) }}>
            <div className="modal" onClick={(e) => e.stopPropagation()} >
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="closeOrder" onClick={() => setOpen(false)}>X</div>



                    <div className="customerInfo">
                        <label htmlFor="customerFullName"> Customer Full Name: </label> <input type="text" id="customerFullName" />
                        <label htmlFor="customerAddress"> Customer Address: </label> <input type="text" id="customerAddress" />
                    </div>
                    <div className="productInfo">
                        <label htmlFor="product">Product: </label> <input type="text" />
                        <label htmlFor="quantity"> Quantity: </label> <input type="number" id="quantity" />


                        <label htmlFor="shippingType">
                            <span>Shipping Type: </span>
                            <select name="" id="shippingType">
                                <option value="">Standard</option>
                                <option value="">Express</option>
                                <option value="">Priority</option>
                            </select>
                        </label>




                    </div>



                    <button onClick={() => setOpen(false)}>
                        send
                    </button>
                </form>




            </div>





        </div>
    )
}
