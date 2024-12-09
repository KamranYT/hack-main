import ProductGrid from "@/components/productgrid";
import  Hero  from "../components/Hero";
import LatestProduct from "@/components/latest";
import LatestBlog from "@/components/blog";

function Home () { 
  return (
    
    <main className='overflow-hidden bg-[#F2F0FF]'>
      
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Featured Products</h1>
       <ProductGrid />
        <LatestProduct />
        <LatestBlog />
        </div>
        
      </div>
    </main>
  );
}
export default Home