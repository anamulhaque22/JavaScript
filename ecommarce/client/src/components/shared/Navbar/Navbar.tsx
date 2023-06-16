import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <Link to={"/"} className="text-2xl font-bold">
          Laptop Bazar
        </Link>
      </div>

      <ul className="flex items-center space-x-4">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/registration"}>Registration</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
      <div>
        <Link to={"/cart"}>Cart(0)</Link>
      </div>
    </nav>
  );
};

export default Navbar;
