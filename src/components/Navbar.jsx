import NetflixLogo from "../assets/NetflixLogo.png";
import { Link ,useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate=useNavigate();
  const handleLogout= async(e)=>{
    e.preventDefault();
    try{
      await logOut();
      navigate("/")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="flex justify-between items-center p-4 z-[100] absolute w-full">
      <Link to="/">
        <img className="cursor-pointer" src={NetflixLogo} alt="NetflixLogo" />
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            {" "}
            <button className=" text-white pr-4">Account</button>
          </Link>
          
            <button onClick={handleLogout} className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer ">
              Logout
            </button>
          
        </div>
      ) : (
        <div>
          <Link to="/login">
            {" "}
            <button className=" text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
