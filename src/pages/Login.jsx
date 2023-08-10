import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { user, logIn } = UserAuth();
  const [error,setError]=useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      
      setError(error.message)
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="NETFLIXBG"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="font-bold text-3xl">Sign In</h1>
              {error? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded "
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded "
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold ">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p className="cursor-pointer">
                    <input className="mr-2 " type="checkbox" />
                    Remember me
                  </p>
                  <p className="cursor-pointer hover:text-blue-500">
                    Need Help?
                  </p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix?</span>
                  <Link className="ml-2 hover:text-blue-600" to={"/signup"}>
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
