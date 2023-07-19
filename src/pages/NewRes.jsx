const NewReservation = () => {
  const inputs = [
    {
      label: "Name",
      type: "text",
      placeholder: "Abebe Kebede",
    },
    {
      label: "No. of People",
      type: "number",
      placeholder: "10",
    },
    {
      label: "Phone Number",
      type: "number",
      placeholder: "0911223344",
    },
    {
      label: "Instagram Handle",
      type: "text",
      placeholder: "@thegreenhouse",
    },
    {
      label: "Event",
      type: "text",
      placeholder: "Zulu Vol.2",
    },
    {
      label: "Table",
      type: "text",
      placeholder: "T1",
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
        <p className=" text-[26px] w-[50%]">Add Reservation</p>
        <div className="flex flex-wrap justify-between w-[80%]">
          {inputs.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 items-center w-[250px]">
                <label
                  htmlFor={item.label}
                  className="block w-[30%] text-sm font-medium text-left leading-6 text-gray-900"
                >
                  {item.label}
                </label>
                <div className="mt-2 w-[60%]">
                  <input
                    type={item.type}
                    name={item.label}
                    id={item.label}
                    disabled
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center w-[50%]">
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Edit Reservation
          </button>
          <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
            Delete Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
