import React from 'react';
import { Item } from "./Item";

export const ItemList = ({ products }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {products.map((prod, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="p-3 ">
                            <Item product={prod} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
