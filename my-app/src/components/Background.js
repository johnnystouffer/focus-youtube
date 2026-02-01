"use client";

import data from "../../public/assets/backgrounds.json";
import { useEffect, useState } from "react";

const NONE_URL = "null";

export default function Background({ backgroundId }) {

      const [backgroundUrl, setBackgroundUrl] = useState(NONE_URL);
      const [loading, setLoading] = useState(true);

      const backgrounds = data.data;
    
      const fetchBackground = async () => {
            try {
                let resolvedId = backgroundId;

                if (localStorage.getItem("background")) {
                    resolvedId = localStorage.getItem("background");
                }

                const backgroundData = resolvedId
                    ? backgrounds.find((item) => String(item.id) === String(resolvedId))
                    : backgrounds[0];

                if (backgroundData?.video_src) {
                    setBackgroundUrl(backgroundData.video_src);
                } else {
                    setBackgroundUrl(NONE_URL);
                }
            } catch (error) {
                console.log("We got an error :(");
                console.error("Error fetching background:", error);
                setBackgroundUrl(NONE_URL);
            } finally {
                setLoading(false);
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
