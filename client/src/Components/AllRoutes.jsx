import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home/Home";
import VideoPage from '../Pages/VideoPage/VideoPage'
import Library from '../Pages/Library/Library'
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchHistory from '../Pages/WatchHistory/WatchHistory'
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import Chanel from '../Pages/Chanel/Chanel'
import Search from '../Pages/Search/Search'
import Groups from '../Pages/Group/Groups';

const AllRoutes = ({ setEditCreateChanelBtn, setVidUploadPage }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videopage/:vid" element={<VideoPage />} />
            <Route path="/history" element={<WatchHistory />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/library" element={<Library />} />
            <Route path="/group" element={<Groups />} />
            <Route path="/likedvideo" element={<LikedVideo />} />
            <Route path="/yourvideos" element={<YourVideo />} />
            <Route path="/seacrh/:searchQuery" element={<Search />} />
            <Route
                path="/chanel/:Cid"
                element={<Chanel
                    setVidUploadPage={setVidUploadPage}
                    setEditCreateChanelBtn={setEditCreateChanelBtn} />}
            />
        </Routes>
    )
}

export default AllRoutes