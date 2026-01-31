"use client";

import { useEffect, useState } from "react";

const API_URL = "https://api.plaza.one/v2/backgrounds/random";
const NONE_URL = "null";

export default function Background() {

      const [backgroundUrl, setBackgroundUrl] = useState(NONE_URL);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchBackground = async () => {
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
        };
    
        fetchBackground();
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