import axios from 'axios'
import Pagination from "Components/Pagination";
import MovieCard from "Components/MovieCard";
import React, { useEffect, useState } from "react";
import './styles.css'
import { BASE_URL } from 'utils/requests';
import { MoviePage } from 'types/movie';

function Listing() {

    const [pageNumber, setPageNumber] = useState(0)

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(res => {
                const data = res.data as MoviePage
                setPageNumber(data.number)
            })
    }, [])

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;