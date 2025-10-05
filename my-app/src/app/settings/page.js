"use client"

import Back from "@/components/Back";
import { useState } from "react";
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

    const [font, selectFont] = useState("Space Mono");

    const newFont = (val) => {
        document.body.classList.remove(localStorage.getItem("font"))
        let newFont = localStorage.setItem("font", FontClassMap[val]);
        print(newFont);
        document.body.classList.add(newFont);
        selectFont(newFont);
    }
    
    return (
        <>
            <Back/>
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="max-w-150">
                    <h1>Select A Font</h1>
                    <Dropdown className="min-w-96" options={Object.entries(FontClassMap)} onSelect={newFont} originalValue={font}></Dropdown>
                </div>
            </div>
        </>
    );
}