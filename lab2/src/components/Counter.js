import React, { useState, useEffect } from 'react';

const Counter=()=> {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <span>Has clickado {count} veces</span>
            <button onClick = {() => setCount(count+1)}>
                Click Here!
            </button>
        </div>
    );
}

export default Counter;