import { useState } from 'react'
import './App.css'

function FilterableProductTable() {

  const [filterText, setFilterText] = useState(''); //Inizializzo Searchbar
  const [inStockOnly, setInStockOnly] = useState(false);  //Inizializzo la checkbox
/*prima è variabile di stato, seconda è una 
funzione che permette  di usare la variabile di stato*/
  
  let prodotti = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];
      //uso le variabili di stato. la componente SearchBar gli passiamo il testo e flaggare la checkbox a seconda dello stato
      //aggiungo 2 parametri alla search bar (filterText, inStockOnly)
   return (
    <div class="FilterableProductTable">
      <SearchBar 
        filterText={ filterText }
        inStockOnly={ inStockOnly }
        setInStockOnly={setInStockOnly}
        setFilterText={setFilterText} /> 

      <ProductTable 
        prodotti={ prodotti } 
        filterText={ filterText }
        inStockOnly={ inStockOnly }/>
    </div>
  )
}

function SearchBar({ filterText, inStockOnly, setInStockOnly, setFilterText }) { //passo i 4 parametri (2 variabili di stato, 2 funzioni per modificarle)
  return (
    <div class="SearchBar">
      <input type="text" id="search" placeholder="Search..." value= { filterText } onChange= { e  => setFilterText(e.target.value)}/> 
      <label>  
        <input type="checkbox" id="instock" checked= { inStockOnly } onChange={ e => setInStockOnly(e.target.checked) }/>
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

function ProductTable({ prodotti, filterText, inStockOnly }) { // 3 parametri
  let righe = []; //vettore vuoto, ogni  elemento sarà una riga
  
  //prima di creare la tabella elimina tutti i prodotti che hanno inStockOnly = a false
  if (inStockOnly){
    prodotti = prodotti.filter (p => p.stocked === true);
  }

  if (filterText !== "") {
    prodotti = prodotti.filter (p => p.name.toLowerCase().includes(filterText.toLowerCase())) /*prendo il 
    vettore prodotti e mantieni solo i prodotti p il cui nome convertito in minuscolo contiene il testo minuscolo*/
    //se ho scritto apple mi farà vedere solo Apple nella ProductTable
  }
  righe.push(<ProductCategoryRow categoria="Fruits" />); //inserisce intestazione di categoria con  push
  let fruits = prodotti.filter(p => p.category === "Fruits"); /*crea vettore fruits e lo filtra
                                                  (trattengo tutti i prodotti e li trattengo per categoria fruits)*/
  fruits.forEach(p => righe.push(<ProductRow nome={p.name} prezzo={p.price} stock={p.stocked} />));
  //per ogni elemento del vettore fruits prendi l'elemento e inseriscilo in una riga con nome, prezzo, stocked
  

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