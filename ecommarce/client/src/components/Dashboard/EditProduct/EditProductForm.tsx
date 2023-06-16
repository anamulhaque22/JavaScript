const EditProductForm = () => {
  return (
    <div className="w-4/12 mx-auto mt-20 pb-10 mb:mt-0 md:col-span-8 space-y-2.5">
      {/* <!-- content form --> */}
      <form className="shadow-md rounded border-solid	border-2 border-[#212425] px-5 py-5 md:px-16 md:py-9">
        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="name"
          >
            Product Tile
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Product Tile"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Price"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Quantity"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Description"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Category"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-white text-base font-medium mb-2"
            htmlFor="productimage"
          >
            Product Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            placeholder="Product Image"
            multiple
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="px-8 py-3 rounded font-medium text-lg text-white mt-6 active">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
