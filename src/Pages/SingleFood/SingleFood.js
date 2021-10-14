import React from 'react';
import { useParams } from 'react-router';

const SingleFood = () => {
    const {foodId} = useParams();
    return (
        <div>
            <h1>This is meal of {foodId}</h1>
        </div>
    );
};

export default SingleFood;