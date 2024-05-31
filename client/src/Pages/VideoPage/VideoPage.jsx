import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Comments from '../../Components/Comments/Comments.jsx'
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import vid from "../../Components/Video/vid.mp4";
import LikeWatchLaterSaveBtns from "./LikeWatchLaterSaveBtns.jsx";
import "./VideoPage.css";
import { addToHistory } from "../../actions/History.js";
import { viewVideo } from "../../actions/video.js";
import Player from 'netplayer'

function VideoPage() {
  const { vid } = useParams();
  // console.log(vid)

  // const chanels = useSelector((state) => state?.chanelReducers);

  // console.log(Cid)
  // const currentChanel = chanels.filter((c) => c._id === vid)[0];

  const vids = useSelector((state) => state.videoReducer);
  // console.log(vids)
  const vv = vids?.data?.filter((q) => q._id === vid)[0];
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleHistory = () => {
    dispatch(
      addToHistory({
        videoId: vid,
        Viewer: CurrentUser?.result._id,
      })
    );
  };
  const handleViews = () => {
    dispatch(viewVideo({
      id: vid
    }))
  }
  useEffect(() => {
    if (CurrentUser) {
      handleHistory();
    }
    handleViews();
  }, []);
  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
          <div className="video_display_screen_videoPage">
            <Player
              sources={[
                {
                  file: `http://localhost:5500/${vv?.filePath}`,
                  label: '1080p'
                },
              ]}
              // subtitles={[
              //   {
              //     lang: 'jp',
              //     language: 'Japanese',
              //     file: 'https://artplayer.org/assets/sample/subtitle.jp.srt'
              //   },
              //   {
              //     lang: 'cn',
              //     language: 'Chinese',
              //     file: 'https://artplayer.org/assets/sample/subtitle.cn.srt'
              //   }
              // ]}
              className="video_ShowVideo_videoPage"
              autoPlay

            />
            {/* <video
              src={`http://localhost:5500/${vv?.filePath}`}
              // src={`https://youtubeclone5031.herokuapp.com/${vv?.filePath}`}
              className={"video_ShowVideo_videoPage"}
              controls
            // autoPlay
            ></video> */}
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage"> {vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                  <div className="views_videoPage">
                    {vv?.Views} views <div className="dot"></div>{" "}
                    {moment(vv?.createdAt).fromNow()}
                  </div>
                  <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
              </div>
              <Link
                to={`/chanel/${vv?.videoChanel}`}
                className="chanel_details_videoPage"
              >
                <b className="chanel_logo_videoPage">
                  <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.Uploder}</p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                  <u>Coments</u>
                </h2>
                <Comments videoId={vv?._id} />
              </div>
            </div>
          </div>
          <div className="moreVideoBar">More video</div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;
