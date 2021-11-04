import React from 'react';
import {useParams} from 'react-router';

const MultiResult = (props) => {
    // DESTRUCTURE INPUTS???
    const {input1} = useParams();
    const {input2} = useParams();
    const {input3} = useParams();

    // USE INLINE STYLING WITH INPUTS
    return (
        <div>
            <h4 style={{color: input2, background: input3}}>The word is: {input1}</h4>
        </div>
    )
}
export default MultiResult