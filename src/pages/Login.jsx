const LoginPage = () => {
  return (
    <div className=" h-[100vh] w-[100%] flex justify-center items-center">
      <div className="w-[40%] drop-shadow-md bg-[#AFFEA0] flex flex-col items-center gap-8 p-6">
        <p className=" text-[26px] w-[50%]">Enter Credentials to Login</p>
        <div className="flex gap-4 items-center">
          <label
            htmlFor="username"
            className="block  text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              type="username"
              name="username"
              id="username"
              defaultValue="you@example.com"
              disabled
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label
            htmlFor="password"
            className="block  text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              defaultValue="you@example.com"
              disabled
              className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <button className="w-[200px] h-[40px] bg-[red]">Login</button>
      </div>
    </div>
  );
};
export default LoginPage;
