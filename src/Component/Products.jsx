
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [sortOption, setSortOption] = useState(""); // State for sorting option

  // Category filter options
  const categories = [
    { name: "All", value: "All" },
    { name: "Chairs", value: "Chairs" },
    { name: "Tables", value: "Tables" },
    { name: "Kids", value: "Kids" },
    { name: "Sofas", value: "Sofas" },
    { name: "Beds", value: "Beds" },
  ];

  // Sorting options
  const sortOptions = [
    { name: "A-Z", value: "a-z" },
    { name: "Z-A", value: "z-a" },
    { name: "Price: Low to High", value: "low-high" },
    { name: "Price: High to Low", value: "high-low" },
  ];

  // Company filter options
  const companies = [
    { name: "All", value: "All" },
    { name: "Modenza", value: "Modenza" },
    { name: "Luxora", value: "Luxora" },
    { name: "Artifex", value: "Artifex" },
    { name: "Comfora", value: "Comfora" },
    { name: "Homestead", value: "Homestead" },
  ];

  // Fetch products from the API
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('https://strapi-store-server.onrender.com/api/products');
      const productsData = response.data.data;
      setProducts(productsData);
      setFilteredProducts(productsData); // Initialize with all products
    }
    fetchProducts();
  }, []);

  // Apply filtering and sorting logic inside useEffect
  useEffect(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.attributes.category === selectedCategory);
    }

    // Apply company filter
    if (selectedCompany !== "All") {
      filtered = filtered.filter(product => product.attributes.company === selectedCompany);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    // if (sortOption === "a-z") {
    //   filtered = [...filtered].sort((a, b) =>
    //     a.attributes.title.localeCompare(b.attributes.title)
    //   );
    // } else if (sortOption === "z-a") {
    //   filtered = [...filtered].sort((a, b) =>
    //     b.attributes.title.localeCompare(a.attributes.title)
    //   );
    // } else if (sortOption === "low-high") {
    //   filtered = [...filtered].sort((a, b) =>
    //     a.attributes.price - b.attributes.price
    //   );
    // } else if (sortOption === "high-low") {
    //   filtered = [...filtered].sort((a, b) =>
    //     b.attributes.price - a.attributes.price
    //   );
    // }



    // Sorting logic apply karna
    if (sortOption === "a-z") {
      filtered = [...filtered].sort((a, b) => {
        if (a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()) return -1;
        if (a.attributes.title.toLowerCase() > b.attributes.title.toLowerCase()) return 1;
        return 0; // dono barabar hain
      });
    } else if (sortOption === "z-a") {
      filtered = [...filtered].sort((a, b) => {
        if (a.attributes.title.toLowerCase() > b.attributes.title.toLowerCase()) return -1;
        if (a.attributes.title.toLowerCase() < b.attributes.title.toLowerCase()) return 1;
        return 0; // dono barabar hain
      });
    } else if (sortOption === "low-high") {
      filtered = [...filtered].sort((a, b) =>
        a.attributes.price - b.attributes.price
      );
    } else if (sortOption === "high-low") {
      filtered = [...filtered].sort((a, b) =>
        b.attributes.price - a.attributes.price
      );
    }


    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedCompany, searchTerm, sortOption]);

  // Clear Filters
  const handleClear = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedCompany("All");
    setSortOption(""); // Reset sorting
  };

  return (
    <div className="products-main">
      <form>
        {/* Search Products */}
        <label htmlFor="input">Search Products</label> <br />
        <input
          type="text"
          id="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name"
        />
        <br />

        {/* Search Category */}
        <label htmlFor="categorySelect">Select Category</label>
        <select id="categorySelect" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat.value}>{cat.name}</option>
          ))}
        </select>
        <br />

        {/* Search Company */}
        <label htmlFor="companySelect">Select Company</label>
        <select id="companySelect" value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
          {companies.map((comp, index) => (
            <option key={index} value={comp.value}>{comp.name}</option>
          ))}
        </select>
        <br />

        {/* Sorting Options */}
        <label htmlFor="sortSelect">Sort By</label>
        <select id="sortSelect" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          {sortOptions.map((sort, index) => (
            <option key={index} value={sort.value}>{sort.name}</option>
          ))}
        </select>
        <br />

        <button type="button" onClick={handleClear}>Clear Filter</button>
      </form>

      <div className="products2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product2">
              <Link to={`/product-details/${product.id}`} element={<ProductDetail />}>
                <div className="product-photo">
                  <img src={product.attributes.image} alt={product.attributes.title} />
                </div>
              </Link>
              <div className="content2">
                <h3>{product.attributes.title}</h3>
                <p>${(product.attributes.price / 100).toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Products;

