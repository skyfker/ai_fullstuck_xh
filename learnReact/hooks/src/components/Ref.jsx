import React, { useEffect, useRef } from 'react';

const Ref = () => {
    const h2Ref = useRef(null);

    useEffect(() => {
        console.log(h2Ref);
    }, []);
    return (
        <div>
            <h2 ref={h2Ref}>Ref</h2>
        </div>
    );
};

export default Ref;