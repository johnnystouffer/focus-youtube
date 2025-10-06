"use client";

import Loading from '@/components/Loading';
import ChooseColor from '@/components/Colors';
import React, { useEffect, useState } from 'react'
import Back from '@/components/Back';

export default function Colors() {

    const f = "color";
    const s = "secondary";
    const t = "link";


    const [primary, setPrimary] = useState("");
    const [secondary, setSecondary] = useState("");
    const [link, setLink] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        setPrimary(localStorage.getItem(f) ? localStorage.getItem(f) : "#ffffff");
        setSecondary(localStorage.getItem(s) ? localStorage.getItem(s) : "#d5d5d5");
        setLink(localStorage.getItem(t) ? localStorage.getItem(t) : "#bdbdff");

        if (!localStorage.getItem(f)) { localStorage.setItem(f, primary); }
        if (!localStorage.getItem(s)) { localStorage.setItem(s, secondary); }
        if (!localStorage.getItem(t)) { localStorage.setItem(t, link); }

        setLoading(false);
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <Back link='/settings' />
            <div className="w-screen h-screen flex justify-center pt-10">
                <div className="min-w-80 w-1/3"> 

                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1">Change Primary Color</h1> 
                        <ChooseColor 
                            color={primary} 
                            localName={f}
                            cssName={"--text-var"} /> 
                    </div> 

                    <div className="w-full mb-6"> 
                        <h1 className="text-xl mb-1 text-[var(--second-var)]">Change Secondary Color</h1> 
                        <ChooseColor 
                            color={secondary} 
                            localName={s}
                            cssName={"--second-var"} /> 
                    </div> 

                    <div className="w-full mb-6 pb-6"> 
                        <h1 className="text-xl mb-1 text-[var(--third-var)] underline">Change Link Color</h1> 
                        <ChooseColor 
                            color={link} 
                            localName={t}
                            cssName={"--third-var"} /> 
                    </div> 

                </div>
            </div>
        </>
    );
}