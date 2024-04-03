// App.jsx
import React, { useState } from 'react';
import Header from './components/Header/Header';
import ProductSection from './components/ProductsSection/ProductsSection';
import productos from './assets/data.json'; // Importa el archivo de datos
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <Banner />
      <ProductSection productos={productos} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
