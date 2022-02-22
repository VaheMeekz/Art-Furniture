import React from 'react';
import {useParams} from "react-router-dom";

const ItemDetail = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default ItemDetail;