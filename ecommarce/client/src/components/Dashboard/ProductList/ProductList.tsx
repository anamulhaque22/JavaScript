const ProductList = () => {
  return (
    <div className="body-content px-8 py-8">
      <div className="flex justify-between mb-10">
        <div className="page-title">
          <h3 className="mb-0 text-[28px]">Products</h3>
          <ul className=" font-medium flex items-center space-x-3 text-text3">
            <li className="breadcrumb-item text-muted">
              <a href="./product-list.html" className="text-hover-primary">
                {" "}
                Home
              </a>
            </li>
            <li className="breadcrumb-item flex items-center">
              <span className="inline-block bg-text3/60 w-[4px] h-[4px] rounded-full"></span>
            </li>
            <li className="breadcrumb-item text-muted">Product List</li>
          </ul>
        </div>
      </div>

      {/* <!-- table --> */}
      <div className=" rounded-t-md rounded-b-md shadow-xs py-4">
        {/* <div className="tp-search-box flex items-center justify-between px-8 py-8">
          <div className="search-input relative">
            <input
              className="input h-[44px] w-full pl-14"
              type="text"
              placeholder="Search by product name"
            />
            <button className="absolute top-1/2 left-5 translate-y-[-50%] hover:text-theme">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.9999 19L14.6499 14.65"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div> */}
        <div className="relative overflow-x-auto  mx-8">
          <table className="w-full table-fixed text-left border-collapse border border-slate-400">
            <thead className="">
              <tr className="">
                <th className="pr-8 py-3  uppercase font-semibold border border-slate-300">
                  Product
                </th>

                <th className="px-3 py-3  uppercase font-semibold w-[170px] text-end border border-slate-300">
                  QTY
                </th>
                <th className="px-3 py-3  uppercase font-semibold w-[170px] text-end border border-slate-300">
                  Price
                </th>

                <th className="px-9 py-3  uppercase  font-semibold w-[15%] text-end border border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray6 last:border-0 text-start mx-9">
                <td className="pr-8 py-5 whitespace-nowrap border border-slate-300">
                  <a href="#" className="flex items-center space-x-5">
                    <img
                      className="w-[60px] h-[60px] rounded-md"
                      src="assets/img/product/prodcut-1.jpg"
                      alt=""
                    />
                    <span className="font-medium text-heading text-hover-primary transition">
                      Whitetails Women's Open Sky
                    </span>
                  </a>
                </td>
                <td className="px-3 py-3 font-normal text-end border border-slate-300">
                  37
                </td>
                <td className="px-3 py-3 font-normal text-end border border-slate-300">
                  $171.00
                </td>

                <td className="px-9 py-3 border border-slate-300">
                  <div className="flex items-center space-x-2 text-xl">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Edit
                    </button>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
