import { useState } from "react";
import SearchBar from "./SearchBar";
import useCategories from "../../../../../Hooks/useCategories";

const ProductSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [list] = useCategories();


    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    // Filter products based on the search query
    const filteredProducts = searchQuery
        ? list.filter((product) => product.category.toLowerCase() === searchQuery.toLowerCase())
        : list;

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div>
                <h2>Search Results for {searchQuery} :</h2>
                <ul>
                    {filteredProducts.map((product, index) => (
                        <li key={index}>
                            <div>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductSearch;