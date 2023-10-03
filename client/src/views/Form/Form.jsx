import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => {
    return(
        <div>

            <NavLink
                to='/home'
            >
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default Form;