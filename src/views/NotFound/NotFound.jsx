import { Link } from 'react-router-dom';
import React from 'react';


const NotFound = () => {
    return (
        <div className='not-found'>
        <h1 className='message-not-found'>404 - Página no encontrada</h1>
        <Link to="/">Volver al inicio</Link>
        </div>
    );
    }

    export default NotFound;