const EventDetails = () => {
  const inputs = [
    {
      label: "Capacity",
      type: "number",
      value: "150",
    },
    {
      label: "Reservations",
      type: "number",
      value: "50",
    },
    {
      label: "Date",
      type: "Date",
      value: "12/12/3",
    },
    {
      label: "Vol.",
      type: "number",
      value: "5",
    },
    {
      label: "Tables",
      type: "number",
      value: "30",
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
        <p className=" text-[32px] w-[50%]">
          Here are the details of Zulu Event
        </p>
        <div className="flex flex-wrap justify-between gap-2 w-[90%]">
          {inputs.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 items-center w-[280px]">
                <label
                  htmlFor={item.label}
                  className="block w-[30%] text-sm font-medium text-left leading-6 text-gray-900"
                >
                  {item.label}
                </label>
                <div className="mt-2 w-[60%]">
                  <div
                    name={item.label}
                    id={item.label}
                    disabled
                    className="px-2 block w-full border-[#17550B] border-2 py-1 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-lg sm:leading-6"
                    placeholder="you@example.com"
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center w-[60%]">
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Delete Event
          </button>
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Edit Event
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
