import React from 'react';
import { useState } from 'react';

const State2 = (props) => {
    const [n] = useState(2);
    const [count, steCount] = useState(() => {
        return props.num * n;
    });

    return (
        <div>
            <button onClick={() => steCount(count + 1)}>{count}</button>
        </div>
    );
};

export default State2;