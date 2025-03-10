import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import p1 from "../assets/images/p1.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  //DEFINE PRODUCT STATE OR VARIABLE (When fetching data from the backend)
  const [products, setProducts] = useState([]);

  //DEFINE A FUCTION TO FETCH PRODUCTS (INSTALL AXIOS TO HELP IN THE FETCHING)
  const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  //EXECUTE FETCHER
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <section className="h-[700px] bg-[url(assets/images/hero-bg.png)] flex justify-end items-center">
        <div className="bg-[#FFF3E3] w-[643px] h-[443px]">
          <p>New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
            ipsam.
            <br /> consectetur adipisicing elit. ipsam
          </p>
          <button>BUY NOW</button>
        </div>
      </section>

      <section>
        <h1>Our Products</h1>
        <div className="grid grid-cols-4 gaps-5">
          {products.map((product) => {
            return (
              <ProductCard
                image={product.image}
                title={product.title}
                key={product.id}
              />
            );
          })}

          {/* <ProductCard image={p1} />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
