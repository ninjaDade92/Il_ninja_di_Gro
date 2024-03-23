import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function FilterableProductTable() {
  
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

      <ProductTable prodotti = {prodotti} />
    </div>
  )  
  }

function ProductRow({ nome, prezzo, inStock }) {
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

  righe.push(<ProductCategoryRow categoria="Fruits" />)
  let fruits = prodotti.filter(p => p.category === "Fruits")  //Passa tutti i valori di "prodotti" in "p" 
  fruits.forEach(p => righe.push(<ProductRow nome={p.name} prezzo={p.price} />)); /*Passa in rassegna
  tutti i frutti e gli applica la funzione ossia applicando il nome  e il prezzo */       
  
  righe.push(<ProductCategoryRow categoria="Fruits" />)
  let vegetables = prodotti.filter(p => p.category === "Fruits")  //Passa tutti i valori di "vegetables" in "p" 
  vegetables.forEach(p => righe.push(<ProductRow nome={p.name} prezzo={p.price} />)); /*Passa in rassegna 
  tutte le verdure e gli applica la funzione ossia applicando il nome  e il prezzo */

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
export default FilterableProductTable




