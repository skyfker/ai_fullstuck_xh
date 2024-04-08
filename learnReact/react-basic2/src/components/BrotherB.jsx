import React from 'react';
import {Consumer} from '../provider';


const BrotherB = props => {
    return (
        <Consumer>
        {
            value => {
                return (
                    <div>
                        BrotherB: {value}
                    </div>
                );
            }
        }
        </Consumer>
    );
};

export default BrotherB;