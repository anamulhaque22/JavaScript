import axiosInstance from "../utils/axiosInstance";
import { errorToast, successToast } from "../utils/formValidation";
import { setToken, setUser } from "../utils/sessionHelper";

export function loginRequest(data: object) {
  return axiosInstance
    .post("/login", data)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        setToken(res.data.data.token);
        setUser(res.data.data.user);
        successToast("Login successful");
        return true;
      }
    })
    .catch((err) => {
      console.log(err);

      if (err.response.status === 401) {
        errorToast("Invalid email or password");
        return false;
      } else {
        errorToast("Something went wrong");
        return false;
      }
    });
}
