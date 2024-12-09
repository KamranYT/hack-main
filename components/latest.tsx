"use client";

function LatestProduct() {
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ backgroundColor: "white" }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>

      {/* Static Navigation */}
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
        <a href="#" className="hover:text-[#FB4997]">Featured</a>
        <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
      </div>

      {/* Static Grid with 6 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {/* Card 1 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 mx-auto">
            <img
              src="latest1.png"
              alt="Comfort Handy Craft"
              className="w-[250px] h-full xl:w-[223px] xl:h-[229px] object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 mx-auto">
            <img
              src="latest2.png"
              alt="Comfort Handy Craft"
              className="w-[250px] h-full ml-14 xl:w-[245px] xl:h-[245px] object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 mx-auto xl:w-[221px] xl:h-[222px]">
            <img
              src="latest3.png"
              alt="Comfort Handy Craft"
              className="w-[230px] h-full ml-14 object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$77.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 xl:w-[267px] xl:h-[277px] mx-auto">
            <img
              src="latest4.png"
              alt="Comfort Handy Craft"
              className="w-[250px] h-full ml-14 object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 mx-auto">
            <img
              src="latest5.png"
              alt="Comfort Handy Craft"
              className="w-[330px] h-full xl:w-[303px] xl:h-[264px] object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <div className="w-full h-60 mx-auto">
            <img
              src="latest6.png"
              alt="Comfort Handy Craft"
              className="w-[340px] h-full xl:w-[360px] xl:h-[261px] object-cover rounded-t-lg mb-4"
            />
          </div>
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProduct;
