import  Hero  from "../components/Hero";

function Home () { 
  return (
    
    <main className='overflow-hidden bg-[#F2F0FF]'>
      
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Featured Products</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-10">
  {/* Grid Item 1 */}
  <div className="w-[270px] h-[361px] bg-white shadow-md rounded-md text-center p-4">
    <img
      src="/chair1.png" // Replace with your image path
      alt="Cantilever chair"
      className="w-[178px] h-[178px] ml-10 object-contain"
    />
    <h3 className="text-pink-600 font-bold mt-2">Cantilever chair</h3>
    <p className="text-gray-500">
      Code - <span className="text-blue-700 font-medium">Y523201</span>
    </p>
    <p className="text-gray-800 mt-1">$42.00</p>
  </div>

  {/* Grid Item 2 */}
  <div className="w-[270px] h-[361px] bg-white shadow-md rounded-md text-center p-4">
    <img
      src="/chair2.png"
      alt="Cantilever chair"
      className="w-[130px] h-[150px] object-contain"
    />
    <h3 className="text-pink-600 font-bold mt-2">Cantilever chair</h3>
    <p className="text-gray-500">
      Code - <span className="text-blue-700 font-medium">Y523202</span>
    </p>
    <p className="text-gray-800 mt-1">$42.00</p>
  </div>

  {/* Grid Item 3 */}
  <div className="w-[270px] h-[361px] bg-white shadow-md rounded-md text-center p-4">
    <img
      src="/chair3.png"
      alt="Cantilever chair"
      className="w-[175px] h-[175px] object-contain"
    />
    <h3 className="text-pink-600 font-bold mt-2">Cantilever chair</h3>
    <p className="text-gray-500">
      Code - <span className="text-blue-700 font-medium">Y523203</span>
    </p>
    <p className="text-gray-800 mt-1">$42.00</p>
  </div>

  {/* Grid Item 4 */}
  <div className="w-[270px] h-[361px] bg-white shadow-md rounded-md text-center p-4">
    <img
      src="chair4.png"
      alt="Cantilever chair"
      className="w-[216] h-[151] object-contain"
    />
    <h3 className="text-pink-600 font-bold mt-2">Cantilever chair</h3>
    <p className="text-gray-500">
      Code - <span className="text-blue-700 font-medium">Y523204</span>
    </p>
    <p className="text-gray-800 mt-1">$42.00</p>
  </div>
</div>

        </div>
      </div>
    </main>
  );
}
export default Home