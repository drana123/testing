import React from 'react'
import { ProductSearchBar } from './ProductsSearchBar'
import { ProductTable } from './ProductTable';

export class ProductSearchContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            products:
            [
                {Id:1,Name:"P1",Price:1000},
                {Id:2,Name:"P2",Price:2000},
                {Id:3,Name:"P3",Price:3000}]
            };
            this.onSearchKeyChanged=this.onSearchKeyChanged.bind(this);
    }
onSearchKeyChanged(value){

    console.log(`ProductSearchContainer->Search->Key-> ${value}`);
    // API
    this.setState({products:[
        {Id:11,Name:"P11",Price:1000},
    {Id:22,Name:"P22",Price:2000},
    {Id:33,Name:"P33",Price:3000}]});

    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
      
}

render(){
    return(

        <div>
            <ProductSearchBar searchKeyChanged={this.onSearchKeyChanged}></ProductSearchBar>
            <ProductTable products={this.state.products}></ProductTable>
        </div>
    );
}

}

