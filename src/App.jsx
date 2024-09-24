
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import ProductsFirst from "./Component/ProductsFirst";


function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://strapi-store-server.onrender.com/api/products');
        const featured = response.data.data.filter(product => product.attributes.featured);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  if (loading) {
    return <p>Loading featured products...</p>;
  }

  if (featuredProducts.length === 0) {
    return <p>No featured products available.</p>;
  }

  return (
    <>

      <div className="main-div">
        <div className="div1">
          <h1>We are changing the way people shop</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos culpa aspernatur aliquid soluta pariatur, repudiandae nihil error repellat ipsum! Ad omnis culpa id quisquam, quis quaerat libero dolore fugiat.</p>
          <button>Our Products</button>
        </div>
        <div className="div2">
          <img src="https://shopping-app-five-zeta.vercel.app/hero1-deae5a1f.webp" alt="" />
        </div>
      </div>
      <div className="mid-div">
        <h1>Featured Products</h1>
        <div className="blank-div"></div>

      </div>





      {/* <div className="products">
        {featuredProducts.map(product => (
          <div key={product.id} className="product">
            <div className="product-photo">
              <img src={product.attributes.image} alt={product.attributes.title} />
            </div>
            <div className="content">
              <h3>{product.attributes.title}</h3>
              <p>${product.attributes.price}</p>
            </div>
          </div>
        ))}
      </div> */}


      {/* <div className="products">
        {featuredProducts.map(product => (
          <div key={product.id} className="product">
            <div className="product-photo">
              <img src={product.attributes.image} alt={product.attributes.title} />
            </div>
            <div className="content">
              <h3>{product.attributes.title}</h3>
           
              <p>${(product.attributes.price / 100).toFixed(2)}</p>
              <a href="">Add To Cart</a>
            </div>
          </div>
        ))}
      </div> */}



      <div className="products">
        {featuredProducts ? <ProductsFirst  ProductsFirst={featuredProducts} /> : "" }
        
        {/* {
          featuredProducts ? featuredProducts.map((product) => {
            return (
              <div key={product.id} className="product">
                <div className="product-photo">
                  <img src={product.attributes.image} alt={product.attributes.title} />
                </div>
                <div className="content">
                  <h3>{product.attributes.title}</h3>

                  <p>${(product.attributes.price / 100).toFixed(2)}</p>
                  <a href="">Add To Cart</a>
                </div>
              </div>
            )
          }) : ""

        } */}
      </div>









    </>
  );
}

export default App;


