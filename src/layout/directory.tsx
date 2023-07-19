// React Import
import React, {Component, useEffect, useRef, useState} from "react";
import { NavLink } from 'react-router-dom';

// CSS Import
import '../resources/css/Admin.css';

// JSON Import
import data from '../resources/data/data.json';

console.log(data)

function directoryView(parentElement : any, horizontalIndex : number) : any {
    if (parentElement.parentElement == "root") {
        // Styling for root 
    } 
    else if (parentElement.childElements.lenght === 0) {
        // Styling for parent element without children
    }
    

    for (let i = 0; i < parentElement.childElements.length; i++) {
        // Find object where parent element == parentElement.childElements[i]
        directoryView(parentElement.childElements[i], horizontalIndex++)
    }


    //return styling
}

export const Directory = (): JSX.Element => {

    const directory = () => {
        
    }

    return (
        <>
            <div className="admin-login flex flex-col h-screen">

                <main>
                    <div className="container-directory">

                        <div className="container-root">
                            { directoryView(data, 0) }
                        </div>

                    </div>
                </main>
                

            </div>
        </>
    )

}