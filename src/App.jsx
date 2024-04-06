import { useState } from 'react'
import './App.css'

function FilterableProductTable() {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  let prodotti = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  return (
    <div class="FilterableProductTable">
      <SearchBar 
        filterText={ filterText }
        inStockOnly={ inStockOnly }/>
      <ProductTable 
        prodotti={ prodotti } 
        filterText={ filterText }
        inStockOnly={ inStockOnly }/>
    </div>
  )
}

function SearchBar() {
  return (
    <div class="SearchBar">
      <input type="text" id="search" placeholder="Search..." />
      <label>
        <input type="checkbox" id="instock"/>
        Only show products in stock
      </label>
    </div>
  )
}

function ProductRow({ nome, prezzo, stock }) {

  if (stock === false) {
    nome = <span class="out_of_stock">{ nome }</span>
  }

  return (
    <div class="ProductRow">
      <span class="Name">{ nome }</span>
      <span class="Price">{ prezzo }</span>
    </div>
  )
}

function ProductCategoryRow({ categoria }) {
  return (
    <div class="ProductCategoryRow">
      { categoria }
    </div>
  )
} 

function ProductTable({ prodotti }) {
  let righe = [];

  righe.push(<ProductCategoryRow categoria="Fruits" />);
  let fruits = prodotti.filter(p => p.category === "Fruits");
  fruits.forEach(p => righe.push(<ProductRow nome={p.name} prezzo={p.price} stock={p.stocked} />));

  righe.push(<ProductCategoryRow categoria="Vegetables" />);
  let vegetables = prodotti.filter(p => p.category === "Vegetables");
  vegetables.forEach(p => righe.push(<ProductRow nome={p.name} prezzo={p.price} stock={p.stocked} />));

  return (
    <div class="ProductTable">
      <div class="ProductTableHeader">
        <span class="Name_h">Nome</span>
        <span class="Price_h">Prezzo</span>
      </div>
      { righe }
    </div>
  )
}

export default  FilterableProductTable;