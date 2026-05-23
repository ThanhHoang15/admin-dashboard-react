import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo2.jpg" alt="logo" />
        <span>THANH HOANG</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" />
        <img src="app.svg" alt="" />
        <img src="expand.svg" alt="" />
        <div className="notifications">
            <img src="notifications.svg" alt="" />
            <span>1</span>
        </div>
       
        <div className="user">
          <img src="avatar.jpg" />
          <span>Peter</span>
        </div>
        <img src="setting.svg" alt="" />
      </div>    
    </div>
  )
}
