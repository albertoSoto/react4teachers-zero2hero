import React, { useState } from 'react';
export default function Car() {
    const [change, setChange] = useState(true);
    return (
        <div>
            <button onClick = {() => setChange(!change)}>
                Click Here!
            </button>
            <div>
                {change ? <h1>Welcome to React4teachers</h1> :
                    <h1>From zero to hero!</h1>}
            </div>
        </div>
    );
}