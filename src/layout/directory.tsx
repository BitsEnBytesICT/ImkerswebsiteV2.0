// React Import
import React, {Component, useEffect, useRef, useState} from "react";
import { NavLink } from 'react-router-dom';

// CSS Import
import '../resources/css/Admin.css';

// JSON Import
import '../resources/data/data.json';

export const Directory = (): JSX.Element => {

    const directory = () => {
        
    }

    return (
        <>
            <div className="admin-login flex flex-col h-screen">

                <main>
                    <div className="container-directory">
                        <h1></h1>
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