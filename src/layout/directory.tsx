// React Import
import React, {Component, useEffect, useRef, useState} from "react";
import { NavLink } from 'react-router-dom';

// CSS Import
import '../resources/css/Admin.css';

// JSON Import
import data from '../resources/data/data.json';

console.log(data.directoryView)

function directoryView(parentElement: any, horizontalIndex: number): any {
    console.log(parentElement)
    console.log(horizontalIndex)
    let styling = ""
    if (parentElement.childElements.length === 0) {
        // Styling for parent element without children
        styling += parentElement.parentElement + " no children\n"
    }
    else if (parentElement.parentElement == "root") {
        // Styling for root 
        styling += parentElement.parentElement + " root\n"
    }
    else {
        styling += parentElement.parentElement + " with children\n"
    }
    

    for (let i = 0; i < parentElement.childElements.length; i++) {
        const index = data.directoryView.findIndex(d => d.parentElement == parentElement.childElements[i])
        console.log(index)
        if (index == -1) continue
        styling += directoryView(data.directoryView[index], horizontalIndex++)
    }


    return styling
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
                            {directoryView(data.directoryView[0], 0) }
                        </div>

                    </div>
                </main>
                

            </div>
        </>
    )

}