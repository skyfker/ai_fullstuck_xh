import { useEffect, useState } from 'react';

export function useLocal (key, value) {
    const [data, setData] = useState(value)
    useEffect(() => {
        localStorage.setItem(key, data)
    },[data]) // 第二个参数是依赖项，只有依赖项改变时，才会执行useEffect
    return [data, setData]
}