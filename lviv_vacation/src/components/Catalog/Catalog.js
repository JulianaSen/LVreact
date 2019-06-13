import React from 'react';
import ItemOfCatalog from './itemOfCatalog';


export default class Catalog extends React.Component {
    render() {
        return (
            <div className="hotels-offers">
                <ItemOfCatalog />
                <ItemOfCatalog />
                <ItemOfCatalog />
            </div>
        )
    }
}