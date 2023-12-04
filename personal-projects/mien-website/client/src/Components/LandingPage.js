import Left from './Left.js'
import Right from "./Right.js";
import { useState } from 'react';


const LandingPage = () => {

    return (
        <div className='landingPage'>
            <Left />
            <Right />
        </div>
    )
}

export default LandingPage;