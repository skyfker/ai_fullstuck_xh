import React from 'react';
import counter from '../../store/counterStore';
import { observer } from 'mobx-react-lite';

const List = () => {
    return (
        <div>
            {JSON.stringify(counter.list)}
        </div>
    );
};

export default observer(List);