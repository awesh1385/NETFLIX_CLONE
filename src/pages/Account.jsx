import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="text-white w-full">
        <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b85863b0-0609-4dba-8fe8-d0370b25b9ee/fdf508c8-97d0-42fd-a6f9-9bef6bf96934/IN-en-20230731-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="NETFLIXBG"
        />
        <div className="bg-black/60 left-0 top-0 w-full h-[550px] fixed"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="font-bold text-3xl md:text-5xl">My Shows</h1>
          <SavedShows/>
        </div>
      </div>
    </>
  );
};

export default Account;
