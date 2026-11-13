import './Sidebar.css'
import { FaCog, FaHeart, FaHome, FaReceipt, FaShoppingCart} from "react-icons/fa";

import logo from '../../../assets/logo.png'
const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" id="sidebar">
        <nav className="sidebar-nav">
          <div className="brand-logo-dash">
            <div className="logo-dash">
              <img src={logo} alt="Vendora Logo" className="logo" />
            </div>

            <div className="brand-text">
              VEND<span>ORA</span>
            </div>
          </div>

          <div className="nav-list">
            <div className="nav-item active">{<FaHome />}Dashboard</div>
            <div className="nav-item">{<FaShoppingCart/>}Cart</div>
            <div className="nav-item">{<FaReceipt />}Orders</div>
            <div className="nav-item">{<FaHeart />} Whistlist</div>
            <div className="nav-item">{<FaCog />}Setting</div>
            {/* <div className="nav-item logOut" onClick={handelLogout}>
              {<FaSignOutAlt />}Logout
            </div> */}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
