import React from 'react';
import Navi from './Navi.js'
import CategoryList from './CategoryList.js';
import ProductList from './ProductList.js';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <CategoryList/>
      <ProductList/>
    </div>
    //<h3>Deneme</h3> //buradaki satır hata verir çünkü jsx yapısında ana bir tag olmalı burada iki tane ana kısım varmış gibi oluyor
  );
}

export default App;
