import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../constants/youtube";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import LiveChat from "./LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

function Watch() {
  const [singleVideo, setSingleVideo] = useState("");
  const [input, setInput] = useState("");
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  // console.log(videoId);
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
    //  console.log(res?.data?.items[0]);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const icons = [
    {
      id: 1,
      icon: <AiOutlineLike className="h-6 w-6 text-green-600 " />,
      text: singleVideo?.statistics?.likeCount,
    },
    {
      id: 2,
      icon: <FaShare className="h-6 w-6 text-slate-500 " />,
      text: "Share",
    },
    {
      id: 3,
      icon: <IoDownloadOutline className="h-6 w-6  text-orange-600" />,
      text: "Download",
    },
  ];
  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Patel",
        message: input,
      })
    );
    setInput("");
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className="mt-20 m-12 flex">
      <div className="w-[60%]">
        <iframe
          width="760"
          height="415"
          src={`https://www.youtube.com/embed/${videoId}?si=SxEtZ6qKUTsU18qe&autoPlay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          {singleVideo?.snippet?.title}{" "}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s"
              alt="profile img"
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h1 className="font-bold">
                {singleVideo?.snippet?.channelTitle}
              </h1>
              <p>8.7k subscribers</p>
            </div>
            <button className=" p-2 px-3 font-medium bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
          <div>
            <div className="flex gap-4">
              {icons.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-1 cursor-pointer p-2 bg-gray-200 rounded-full"
                  >
                    {item.icon}
                    <p>{item.text} </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-16 w-full p-4  ">
        {/* right side of single video such as live chat and suggested video */}
        <div className="border border-gray-300 p-3 rounded-md">
          <div className="flex items-center justify-between border rounded-full p-2 border-gray-300">
            <h1 className="font-semibold text-lg">Top Chat</h1>
            <BsThreeDotsVertical className="h-6 w-6 cursor-pointer" />
          </div>
          <div className="overflow-y-auto h-[22rem] flex flex-col-reverse ">
            <LiveChat />
          </div>
          <div>
            <div>
              <div className="flex gap-2 items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJxOLfDct_vEPdS-6OsRnS-kDl_HCv5nI2A&s"
                  alt="profile img"
                  className="h-10 w-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Send message"
                  className="border border-b-gray-300 w-[80%]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <IoMdSend
                  className="h-8 w-8 p-1 rounded-full bg-gray-300 cursor-pointer"
                  onClick={sendMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watch;
