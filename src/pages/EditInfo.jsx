const EditInfo = () => {
    const inputs = [
      {
        label: "Event Name",
        type: "text",
      },
      {
        label: "Capacity",
        type: "number",
      },
      {
        label: "Reservations",
        type: "number",
      },
      {
        label: "Date",
        type: "Date",
      },
      {
        label: "Vol.",
        type: "number",
      },
      {
        label: "Tables",
        type: "number",
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
          <p className=" text-[32px]">Edit Information for Zulu Event</p>
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
                    <input
                      type={item.type}
                      name={item.label}
                      id={item.label}
                      defaultValue="you@example.com"
                      disabled
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center w-[50%]">
            <button className="bg-[white] text-[#0E3906] h-[40px] w-[150px]">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default EditInfo;
  