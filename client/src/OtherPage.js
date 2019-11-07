import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
    return (
        <div>
            Some other pages!
            <Link to={"/"}>Go back</Link>
        </div>
    );
};