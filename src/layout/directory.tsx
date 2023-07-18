// React Import
import React, {Component, useEffect, useRef, useState} from "react";
import { NavLink } from 'react-router-dom';

// Css Import
import '../resources/css/Admin.css';

export const Directory = (): JSX.Element => {

    const directory = () => {
        
    }

    return (
        <>
            <div id="homeRoot" className="h-screen">
                {/* bg-yellow-500  */}

                <main>
                    <div className="container-directory">
                        



                        
                    |- pages/
                       |-  home.tsx
                       |-  agenda.tsx
                           |-  cursussen.tsx 
                       |-  nieuws.tsx
                       |-  bijenzwerm.tsx
                       |-  vrienden.tsx
                       |-  projecten.tsx
                       |-  informatie.tsx
                       |-  bijenhouden.tsx
                       |-  contact.tsx

                    </div>
                </main>
                

            </div>
        </>
    )

}