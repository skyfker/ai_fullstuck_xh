import React, { useState } from 'react';
import useScroll from '../_hooks/useScroll';
import {useLocal} from '../_hooks/useLocal';

const MyHooks = () => {
    // const [y, setY] = useState(0);

    // window.addEventListener('scroll', (e) => {
    //     console.log(document.documentElement.scrollTop);
    // });

    const [pageY] = useScroll(0)
    const [count, setCount] = useLocal('count', 0);

    return (
        <div style={{ height: '200vh', marginTop: '200px' }}>
            当前页面滚动距离：{pageY}

            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
};

export default MyHooks;