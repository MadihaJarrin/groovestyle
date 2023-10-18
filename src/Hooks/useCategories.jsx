import { useEffect } from "react";
import { useState } from "react";

const useCategories = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json()) //convert response to json
            .then(data => {

                setList(data);
                setLoading(false);
            }
            )
    }, [])
    return [list, loading]
};

export default useCategories;