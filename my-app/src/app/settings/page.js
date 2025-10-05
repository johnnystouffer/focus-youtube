"use client"

import Back from "@/components/Back";
import { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown";

export const FontClassMap = {
  "Arial": "font-arial",
  "Verdana": "font-verdana",
  "Tahoma": "font-tahoma",
  "Trebuchet MS": "font-trebuchet",
  "Georgia": "font-georgia",
  "Times New Roman": "font-times",
  "Palatino Linotype": "font-palatino",
  "Garamond": "font-garamond",
  "Courier New": "font-courier",
  "Lucida Sans Unicode": "font-lucida",
  "Impact": "font-impact",
  "Segoe UI": "font-segoe",
  "Optima": "font-optima",
  "Gill Sans": "font-gillsans",
  "Century Gothic": "font-century",
  "Inter": "font-inter",
  "Roboto": "font-roboto",
  "Open Sans": "font-opensans",
  "Lato": "font-lato",
  "Montserrat": "font-montserrat",
  "Poppins": "font-poppins",
  "Source Sans Pro": "font-sourcesans",
  "Nunito": "font-nunito",
  "Raleway": "font-raleway",
  "Ubuntu": "font-ubuntu",
  "Playfair Display": "font-playfair",
  "Merriweather": "font-merriweather",
  "Roboto Slab": "font-robotoslab",
  "Oswald": "font-oswald",
  "Fira Sans": "font-firasans",
  "Work Sans": "font-worksans",
  "Quicksand": "font-quicksand",
  "DM Sans": "font-dmsans",
  "Josefin Sans": "font-josefin",
  "Pacifico": "font-pacifico",
  "Space Mono": "font-spacemono"
};

export default function Settings() {

    const defaultOptions = ["Enabled", "Disabled"];

    const [font, selectFont] = useState("font-spacemono");
    const [enableComments, setComments] = useState(false);
    const [desc, setDesc] = useState(true);
    const [likes, setLikes] = useState(true);

    useEffect(() => {
        const savedFont = localStorage.getItem("font") || "font-spacemono";
        const savedComments = localStorage.getItem("comments") || "Disabled";
        const savedDesc = localStorage.getItem("desc") || true;
        const savedLikes = localStorage.getItem("likes") || true;

        Object.values(FontClassMap).forEach((cls) => document.body.classList.remove(cls));
        document.body.classList.add(savedFont);

        selectFont(savedFont);
        setComments(savedComments === "Enabled");
        setDesc(savedDesc);
        setLikes(savedLikes);
    }, []);

    const newFont = (val) => {
        let olFont = localStorage.getItem("font");
        if (olFont) {
            document.body.classList.remove(olFont);
        }
        localStorage.setItem("font", val);
        let newF = localStorage.getItem("font");
        document.body.classList.add(newF);
        selectFont(newF);
    }

    const commentOption = (val) => {
        localStorage.setItem("comments", val);
        setComments(val === "Enabled" ? true : false);
    }

    const descriptionOptions = (val) => {
        localStorage.setItem("desc", val);
        setDesc(val === "Enabled" ? true : false);
    }

    const likeOption = (val) => {
        localStorage.setItem("likes", val);
        setLikes(val === "Enabled" ? true : false);
    }

    
    return (
        <>
            <Back/>
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="min-w-80 w-1/3">
                    <div className="w-full mb-5">
                        <h1 className="text-xl mb-1">Select A Font</h1>
                        <Dropdown options={Object.entries(FontClassMap)} onSelect={newFont} val={font}></Dropdown>
                    </div>
                    <div className="w-full mb-5">
                        <h1 className="text-xl mb-1">Comments</h1>
                        <Dropdown options={defaultOptions} onSelect={commentOption} val={enableComments ? defaultOptions[0] : defaultOptions[1]}></Dropdown>
                    </div>
                    <div className="w-full mb-5">
                        <h1 className="text-xl mb-1">Descriptions</h1>
                        <Dropdown options={defaultOptions} onSelect={descriptionOptions} val={desc ? defaultOptions[0] : defaultOptions[1]}></Dropdown>
                    </div>
                    <div className="w-full mb-5">
                        <h1 className="text-xl mb-1">Likes & Dislikes</h1>
                        <Dropdown options={defaultOptions} onSelect={likeOption} val={likes ? defaultOptions[0] : defaultOptions[1]}></Dropdown>
                    </div>
                </div>
            </div>
        </>
    );
}