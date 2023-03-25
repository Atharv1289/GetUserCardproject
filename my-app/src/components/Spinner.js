import React from "react";
import "./Spinner.css";

function Spinner() {

    return (
    <div  className="flex flex-col gap-5 justify-center items-center" >
        <div className="spinner">

        </div>
        <p className="text-bgDark font-bold">Loading...</p>
    </div>
    )
}

export default Spinner;