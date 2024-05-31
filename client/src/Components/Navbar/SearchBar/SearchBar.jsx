import React from "react";
import { BsMic, BsMicFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import SearchList from "./SearchList";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './SearchBar.css'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [seachListA, setSeachList] = useState(false)

    const TitleArray = useSelector(s => s?.videoReducer)
        ?.data?.filter(q => q?.videoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m => m?.videoTitle)

    // const TitleArray = ["video1", "Video2", "Animation video", "Movies"].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()));
    return (
        <>
            <div className="SearchBar_Container">
                <div className="SearchBar_Container2">
                    <div className="search_div">
                        <input type="text" className="iBox_SearchBar" placeholder="Search"
                            onChange={e => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            onClick={() => setSeachList(true)}
                        />
                        <Link to={`/seacrh/${searchQuery}`}>
                            <FaSearch className="searchIcon_SearchBar"
                                onClick={() => setSeachList(false)}
                            />
                        </Link>
                        <BsMic className="Mic_SearchBar" />
                        {searchQuery && seachListA &&
                            <SearchList
                                setSearchQuery={setSearchQuery}
                                TitleArray={TitleArray}
                            />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar