import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="">
      <Fragment>
        <ToastContainer />
        <RouterProvider router={router} />
      </Fragment>
    </div>
  );
}

export default App;
