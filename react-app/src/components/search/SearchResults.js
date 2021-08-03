import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Listings/ProductDisplay";
import { getReviews } from "../../store/reviews";
// import ListingFilters from "../Listings/ListingFilters";

const SearchResults = () => {
    const dispatch = useDispatch();
    const { searchTerm } = useParams();
    const [searchResults, setSearchResults] = useState([]);
    const reviewsObj = useSelector(state => state.reviews);
    const reviews = Object.values(reviewsObj);

    useEffect(() => {
        (async() => {
            const res = await fetch(`/api/search/${searchTerm}`);

            if (res.ok) {
                const data = await res.json();
                setSearchResults(data.search_results);
            }
        })();
    }, [searchTerm]);

    useEffect(()=>{
        dispatch(getReviews());
    }, [dispatch]);

    return (
        <>
            <h1> Search Term: {searchTerm} </h1>
            {/* <ul>
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
            </ul> */}
            <div className='listingsPage__container'>
                {searchResults.length ?
                <>
                    {/* <ListingFilters /> */}
                    <div className='listingGrid__container'>
                        {searchResults?.map( result => {
                            const indReviews = reviews.filter(review => review.productId === result.id);
                            return <ProductDisplay product={result} reviews={indReviews} key={result.id}/>
                            }
                        )}

                    </div>
                </>
                :
                <h2>Sorry, no results found.</h2>
                // {searchResults.length ? null : <h2>Sorry, no results found.</h2>}

                }
            </div>
        </>
    )
}

export default SearchResults;