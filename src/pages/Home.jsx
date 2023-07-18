import { Link } from "react-router-dom";

const Home = () => {
  const options = [
    {
      label: "Edit Events",
      path: "/editEvents",
    },
    {
      label: "Edit Tables",
      path: "/editEvents",
    },
    {
      label: "Edit Reservations",
      path: "/editEvents",
    },
  ];
  return (
    <div className=" h-[100vh] w-[100%] flex justify-center items-center">
      <div className="w-[50%] drop-shadow-md bg-[#AFFEA0] flex flex-col items-center gap-8 p-6">
        <div className="flex justify-between items-center w-[100%]">
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Return
          </button>
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Log Out
          </button>
        </div>
        <p className=" text-[26px] w-[50%]">
          Welcome to the Seat Reservation System
        </p>
        <div className="flex justify-around w-[100%]">
          {options.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className="bg-[#17550B] h-[230px] w-[180px] text-[white] flex items-center justify-center text-[24px]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
