import React from 'react';
import {useParams} from 'react-router';

const Result = (props) => {
    // DESTRUCTURER PROPS AS INPUT OR VICE VERSA??
    const {input} = useParams();
    /* IF CHECK TO DETERMINE isNaN(WORD) OR NUMBER
    TO RENDER CORRECT PHRASE */
    if(isNaN(input) ){
        return (
            <div>
                <h4>The word is: {input}</h4>
            </div>
        )
    } else {
        return (
            <div>
                <h4>The number is: {input}</h4>
            </div>
        )
    }
}

export default Result