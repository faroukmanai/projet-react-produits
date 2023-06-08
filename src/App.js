import React, { useState , useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Produits from './components/Produits'
import Button from './components/Button';
import AddProduct from './components/AddProduct';
import EditProductForm from './components/EditProductForm';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

// import playstation5Image from './images/playstation5.jpg';
// import nintendo from './images/Nintendo.jpg'
// import drone from './images/Drone.jpg'
// import watch from './images/watch.jpg'
// import tele from './images/Tele.jpg'
// import play4 from './images/PS4-Console-wDS4.jpg'


function App() {
  const [products, setProducts] = useState([]);
  //   {
  //       id:1,
  //       nom: 'Playstation 5',
  //       Description: 'Console de jeux vidéo Sony avancée.',
  //       Prix: 1200,
  //       Catégorie: 'Jeux vidéo',
  //       image: playstation5Image
  //   },
  //   {
  //       id:2,
  //       nom: 'Nintendo Switch',
  //       Description: 'Console de jeu vidéo hybride Nintendo.',
  //       Prix: 800,
  //       Catégorie: 'Jeux vidéo',
  //       image: nintendo
  //   },
  //   {
  //       id:3,
  //       nom: 'Drone DJI',
  //       Description: 'Drone aérien avancé pour photographie.',
  //       Prix: 1800,
  //       Catégorie: 'Vidéo',
  //       image: drone
  //   },
  //   {
  //       id:4,
  //       nom: 'Samsung 77 4k',
  //       Description: 'Smart TV',
  //       Prix: 5000,
  //       Catégorie: 'TV',
  //       image: tele
  //   },
  //   {
  //       id:5,
  //       nom: 'Apple Watch',
  //       Description: 'Montre intelligente',
  //       Prix: 140,
  //       Catégorie: 'Watch',
  //       image: watch
  //   },
  //   {
  //     id:6,
  //     nom: 'Playstation 4',
  //     Description: 'Console de jeux vidéo Sony avancée.',
  //     Prix: 400,
  //     Catégorie: 'Jeux vidéo',
  //     image: play4
  // },
// ]);
const [showAddProduct, setShowAddProduct] = useState(false); // État pour afficher ou masquer le formulaire d'ajout de produit
const [showEditModal, setShowEditModal] = useState(false);
const [editingProduct, setEditingProduct] = useState(null);
const [message, setMessage] = useState('');

const toggleAddProduct = () => { // Fonction appelée pour afficher ou masquer le formulaire d'ajout de produit
  setShowAddProduct(!showAddProduct); // Inverser la valeur de showAddProduct pour afficher ou masquer le formulaire
};


useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    setProducts(data);
  };
  fetchProducts();
}, []);

//Ajouter
// const onAdd = (product) => { // Fonction appelée lors de l'ajout d'un produit
//   setProducts(prevProducts => [...prevProducts, product]); // Ajouter le produit à la liste des produits
//   setShowAddProduct(false); // Masquer le formulaire d'ajout de produit
//   setMessage('Produit ajouté avec succès !'); // Message à afficher après l'ajout
//    // Réinitialiser le message après 3 secondes (3000 millisecondes)
//    setTimeout(() => {
//     setMessage('');
//   }, 3000);
// };

const onAdd = async (product) => {
  const response = await fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    const newProduct = await response.json();
    setProducts(prevProducts => [...prevProducts, newProduct]);
    setShowAddProduct(false);
    setMessage('Produit ajouté avec succès !');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }
};

// //Supprimer
// const onDelete = (product) => { // Fonction appelée lors de la suppression d'un produit
//   setProducts(products.filter((p) => p !== product)); // Supprimer le produit de la liste des produits en filtrant les produits différents de celui à supprimer
// };

const onDelete = async (product) => {
  const response = await fetch(`http://localhost:5000/products/${product.id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    setProducts(products.filter((p) => p.id !== product.id));
  }
};

// Modifier

// const onEdit = (updatedProduct) => {
//   const { index, ...rest } = updatedProduct;
//   setProducts((prevProducts) =>
//     prevProducts.map((product, i) =>
//       i === index ? { ...product, ...rest } : product
//     )
//   );
// };
const onEdit = async (updatedProduct) => {
  const { index, ...rest } = updatedProduct;

  const response = await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rest),
  });

  if (response.ok) {
    const updatedProductFromServer = await response.json();
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, ...updatedProductFromServer } : product
      )
    );
    setShowEditModal(false);
    setEditingProduct(null);
  }
};
const startEditing = (product, index) => {
  setEditingProduct({ ...product, index });
  setShowEditModal(true);
};

const cancelEdit = () => {
  setShowEditModal(false);
  setEditingProduct(null);
};

//Affichage
return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produits" element={
          <>
            <Button text="Ajouter un produit" onClick={toggleAddProduct} />
            {showAddProduct && <AddProduct onAdd={onAdd} />}
            <h1>Tous les produits</h1>
            {message && <p className='message'>{message}</p>}
            <div className="container">
              <Produits products={products} onDelete={onDelete} onEditClick={startEditing} />
              {showEditModal && editingProduct && (
                <div className="modal">
                  <div className="modal-content">
                    <EditProductForm product={editingProduct} onEdit={onEdit} cancelEdit={cancelEdit} />
                  </div>
                </div>
              )}
            </div>
          </>
        } />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
}

export default App;



