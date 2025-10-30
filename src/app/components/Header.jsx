import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header">
      <FaApple size={60} color="white" className="appleicon" />
      <div className="nav-links">
        <a href="">Mac</a>
        <a href="">iPhone</a>
        <a href="">iPad</a>
        <a href="" className="iwatchheader">
          iWatch
        </a>
        <a href="">Support</a>
      </div>
      <div className="searchbag">
        <CiSearch size={25} color="white" />
        <p>|</p>
        <IoBagHandleOutline size={25} color="white" />
      </div>
    </div>
  );
};

export default Header;
