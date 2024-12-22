import React from 'react';

const ShopexOffer: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-[#151875] text-4xl mb-5 font-bold">What Shopex Offer!</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 text-center">
          <i className="text-5xl text-[#151875] mb-3"><img src="delivery.png" alt="" /></i>
          <h3 className="text-lg text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">Experience quick and reliable delivery for all your purchases.</p>
        </div>
        <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 text-center">
          <i className="text-5xl text-[#151875] mb-3"><img src="cashback.png" alt="" /></i>
          <h3 className="text-lg text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">Enjoy safe and secure payment options for a worry-free experience.</p>
        </div>
        <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 text-center">
          <i className="text-5xl text-[#151875] mb-3"><img src="quality.png" alt="" /></i>
          <h3 className="text-lg text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">Get access to top-quality products from trusted brands.</p>
        </div>
        <div className="w-[270px] h-[320px] bg-white shadow-lg rounded-lg flex flex-col justify-center items-center p-5 text-center">
          <i className="text-5xl text-[#151875] mb-3"><img src="24.png" alt="" /></i>
          <h3 className="text-lg text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-600">Our team is available around the clock to assist you.</p>
        </div>
      </div>
    </div>
  );
};

export default ShopexOffer;
