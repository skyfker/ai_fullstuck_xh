import React, { useEffect } from 'react';
// import movieStore from '../../store/movieStore';
import { useStore } from '../../store'
import { observer } from 'mobx-react-lite';

const MovieList = () => {
    const { movieStore, CounterStore } = useStore();

    useEffect(() => {
        movieStore.setMovieList();
    }, []);

    return (
        <div>
            <ul>
                {movieStore.movieList.map((item) => (
                    <li key={item.id}>{item.nm} -- {item.star}</li>
                ))}
            </ul>
        </div>
    );
};

export default observer(MovieList);