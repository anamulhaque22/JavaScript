const RegistrationForm = () => {
  return (
    <div className="w-4/12 mx-auto mt-20 pb-10 mb:mt-0 md:col-span-8 space-y-2.5">
      {/* <!-- content form --> */}
      <form className="shadow-md rounded border-solid	border-2 border-[#212425] px-5 py-5 md:px-16 md:py-9">
        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="mobile"
          >
            Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Mobile Number"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="address"
          >
            Gender
          </label>
          <input className="mr-1" name="gender" type="radio" value={"male"} />
          <span className="mr-5">Male</span>
          <input className="mr-1" type="radio" name="gender" value={"female"} />
          <span className="mr-5">Female</span>
          <input className="mr-1" type="radio" value={"other"} name="gender" />
          <span className="mr-5">Other</span>
        </div>

        <div className="flex items-center justify-between">
          <button className="px-8 py-3 rounded font-medium text-xl text-white mt-6 active">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
