import React, {Component} from 'react';
import FilterMenu from '../FilterMenu/filterMenu';
import  '../../css/style.css';
import ItemOfCatalog from '../itemOfCatalog/itemOfCatalog'
import Catalog from '../itemOfCatalog/Catalog'


export default class App extends Component{
    render() {
        return (
            <Catalog />
        )
      }
}

