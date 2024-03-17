import React from 'react';

export const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="text-center">
                <h1 className="mb-4" style={{ fontSize: "3rem", color: "red" }}>404 Not Found</h1>
                <p className="lead">La pagina que estas buscando no existe</p>
            </div>
        </div>
    );
};