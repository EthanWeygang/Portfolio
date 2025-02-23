import { useState } from "react";

function NavBar(){
    return(
            <nav >
                <div className="nav-bar-div">
                    <button> About me </button>
                    <button> School </button>
                    <button> Projects </button>
                    <button> Presence </button>
                </div>
            </nav>
        );
}


export default NavBar