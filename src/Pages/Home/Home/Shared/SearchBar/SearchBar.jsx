import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        console.log(value);
        setQuery(value);
        // onSearch(value);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Search for products"
                className="input input-bordered input-secondary w-full max-w-xs"
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;