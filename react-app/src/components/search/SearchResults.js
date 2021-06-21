import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/search/${searchTerm}`);

            if (res.ok) {
                const data = await res.json();
                setSearchResults(data.search_results);
            }
        })();
    }, [searchTerm]);

    return (
        <>
            <h1> Search Term: {searchTerm} </h1>
            <ul>
                {
                    searchResults.map( result => {
                        return (
                            <div key={result.id}>
                                <li>Name: {result.name}</li>
                                <li>Price: {result.price}</li>
                            </div>
                        );
                    })
                }
            </ul>
            {searchResults.length ? null : <h2>Sorry, no results found.</h2>}
        </>
    )
}

export default SearchResults;