"use client";

import Back from "@/components/Back"; 
import { useState, useEffect } from "react";
import Dropdown from "@/components/Dropdown";
import FontClassMap from "@/components/FontClassMap";
import Loading from "@/components/Loading";
import Link from "next/link";
 
 
export default function Settings() { 

    const defaultOptions = ["Enabled", "Disabled"]; 
    const [font, selectFont] = useState("font-spacemono"); 
    const [enableComments, setComments] = useState(false); 
    const [desc, setDesc] = useState(true); 
    const [likes, setLikes] = useState(true); 
    const [loading, setLoading] = useState(false);
    
    useEffect(() => { 
        setLoading(true);
        const savedFont = localStorage.getItem("font") || "font-spacemono"; 
        const savedComments = localStorage.getItem("comments") || "Disabled"; 
        const savedDesc = localStorage.getItem("desc") || "Enabled"; 
        const savedLikes = localStorage.getItem("likes") || "Enabled";

        Object.values(FontClassMap).forEach((cls) => document.body.classList.remove(cls)); 
        document.body.classList.add(savedFont); 
        selectFont(savedFont); 

        setComments(savedComments === "Enabled"); 
        setDesc(savedDesc === "Enabled"); 
        setLikes(savedLikes === "Enabled"); 
        setLoading(false);
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
    
    if (loading) {
        return (<Loading />);
    }
    
    return ( 
        <> 
            <Back/> 
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="min-w-80 w-1/3"> 
                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Change Font</h1> 
                        <Dropdown options={Object.entries(FontClassMap)} onSelect={newFont} val={font}></Dropdown> 
                    </div> 

                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Change Font Color</h1> 
                        <Link className="text-[var(--third-var)] transform hover:scale-105 underline transition-all ease-in-out" href={'/settings/colors'}>To Font Color Page</Link>
                    </div> 

                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Comments</h1> 
                        <Dropdown options={defaultOptions} onSelect={commentOption} val={enableComments ? defaultOptions[0] : defaultOptions[1]}></Dropdown> 
                    </div> 

                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Descriptions</h1> 
                        <Dropdown options={defaultOptions} onSelect={descriptionOptions} val={desc ? defaultOptions[0] : defaultOptions[1]}></Dropdown> 
                    </div> 
                    
                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Likes & Dislikes</h1> 
                        <Dropdown options={defaultOptions} onSelect={likeOption} val={likes ? defaultOptions[0] : defaultOptions[1]}></Dropdown> 
                    </div> 
                </div> 
            </div> 
        </> 
    ); 
}