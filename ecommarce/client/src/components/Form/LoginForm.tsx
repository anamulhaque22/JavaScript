import { useEffect, useState } from "react";
import {
  errorToast,
  isEmpty,
  validateEmail,
  validatePassword,
} from "../../utils/formValidation";
import { loginRequest } from "../../APIRequest/APIRequest";
import { useLocation, useNavigate } from "react-router-dom";
import { getToken } from "../../utils/sessionHelper";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = getToken();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (e: any) => {
    e.preventDefault();
    if (isEmpty(email)) {
      errorToast("Email is required");
    } else if (!validateEmail(email)) {
      errorToast("Email is not valid");
    } else if (isEmpty(password)) {
      errorToast("Password is required");
    } else if (!validatePassword(password)) {
      errorToast("Password must be 8 character long");
    } else {
      loginRequest({ email, password }).then((res) => {
        if (res) {
          navigate("/");
        }
      });
    }
  };

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  return (
    <div className="w-4/12 mx-auto mt-20 pb-10 mb:mt-0 md:col-span-8 space-y-2.5">
      {/* <!-- content form --> */}
      <form
        className="shadow-md rounded border-solid	border-2 border-[#212425] px-5 py-5 md:px-16 md:py-9"
        onSubmit={handleLoginSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="Email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
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

export default LoginForm;
