import { Link } from "react-router-dom";

const Events = () => {
  const options = [
    {
      label: "Edit Trivia Event Info",
      path: "/editTrivia",
    },
    {
      label: "Edit Jungle Event Info",
      path: "/editJungle",
    },
    {
      label: "Edit ZULU Event Info",
      path: "/editEvents",
    },
    {
      label: "Edit Pre Game Event Info",
      path: "/editEvents",
    },
    {
      label: "Edit Sunset Sundays Event Info",
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
        <p className=" text-[26px] w-[80%]">
          Select which event you would like to make modifications to
        </p>
        <div className="flex justify-between w-[100%]">
          {options.map((item, index) => {
            return (
              <Link
                to={item.path}
                key={index}
                className="bg-[#17550B] h-[230px] w-[100px] text-[white] flex items-center justify-center text-[18px]"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};
export default Events;
