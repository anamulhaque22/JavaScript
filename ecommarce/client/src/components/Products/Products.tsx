import { useEffect, useState } from "react";
import Product from "./Product";
import axiosInstance from "../../utils/axiosInstance";
import { getToken } from "../../utils/sessionHelper";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/getproducts", {
        headers: {
          token: getToken(),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setProducts(res.data.data);
        }
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-16">Products</h1>

      {products.map((product: object) => <Product key={product._id} prodcut={product}/>)}
    </div>
  );
};

export default Products;
