//The layout.ts is used to display objects on the html page each, you can set the layout
// for any page also can use multiple layouts.
import Navbar from "@/app/components/Navbar";
import React from "react";

export default function ({children}: Readonly<{ children: React.ReactNode}>) {
    return (
        <main className="font-work-sans">
            <Navbar/>

            {children}
        </main>
    )

}