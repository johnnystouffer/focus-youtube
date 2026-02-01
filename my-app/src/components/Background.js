"use client";

import { useEffect, useState } from "react";

const API_URL = "https://api.plaza.one/v2/backgrounds";
const NONE_URL = "null";

export default function Background({ backgroundId }) {

      const [backgroundUrl, setBackgroundUrl] = useState(NONE_URL);
      const [loading, setLoading] = useState(true);
    
      const fetchBackground = async () => {

            if (localStorage.getItem("background")) {
                const savedBackground = localStorage.getItem("background");
                try {
                    const response = await fetch(API_URL + `/${savedBackground}`);
                    const data = await response.json();
                    
                    if (data) {
                        setBackgroundUrl(data.data.video_src);
                    }
                } catch (error) {
            
                    console.log("We got an error :(");
                    console.error("Error fetching background:", error);
                    setBackgroundUrl(NONE_URL);
                } finally {
                    setLoading(false);
                }

            }

            else if (!backgroundId) {
                try {

                    const response = await fetch(API_URL);            
                    const data = await response.json();

                    if (data) {
                        setBackgroundUrl(data.data.video_src);
                    }
                } catch (error) {
            
                    console.log("We got an error :(");
                    console.error("Error fetching background:", error);
                    setBackgroundUrl(NONE_URL);
                } finally {
                    setLoading(false);
                }
            }
            else {
                try {
                    const response = await fetch(API_URL + `/${backgroundId}`);
                    const data = await response.json();

                    if (data) {
                        setBackgroundUrl(data.data.video_src);
                    }
                } catch (error) {
                    console.log("We got an error :(");
                    console.error("Error fetching background:", error);
                    setBackgroundUrl(NONE_URL);
                } finally {
                    setLoading(false);
                }
            }
        }

      useEffect(() => {
        fetchBackground();
      }, []);

      useEffect(() => {
        const handleBackgroundChange = () => {
          setLoading(true);
          fetchBackground();
        };
        window.addEventListener('backgroundChange', handleBackgroundChange);
        return () => window.removeEventListener('backgroundChange', handleBackgroundChange);
      }, []);
    

    if (loading || backgroundUrl === NONE_URL) {
        return (<div
            className="fixed top-0 left-0 w-full h-full bg-indigo-950/40 z-[-1]">
        </div>
    );
    }

    return (
        <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            src={backgroundUrl}
            autoPlay
            muted
            loop
            playsInline
        />
    );
}
