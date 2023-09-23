import React, { useState } from 'react';
const Newcounter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button type="button" onClick={incrementCount}>INC</button>
            <button><span>{count}</span></button>
            <button type="button" onClick={decrementCount}>DEC</button>
        </div>
    )
};
export default Newcounter;