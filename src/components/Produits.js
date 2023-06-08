import React from 'react';
import Button from './Button';

const Produits = ({ products, onDelete, onEditClick }) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className='carte'>
          <img src={product.image} alt={product.nom} />
          <div>
            <p>
              <span>Nom:</span> {product.nom}
            </p>
            <p>
              <span>Description:</span> {product.Description}
            </p>
            <p>
              <span>Prix:</span> {product.Prix}$
            </p>
            <p>
              <span>Catégorie:</span> {product.Catégorie}
            </p>
          </div>
          <div>
            <Button
              text='Modifier'
              color={' #3367d6'}
              onClick={() => onEditClick(product, index)}
            />
            <Button
              text='Supprimer'
              color={'#FD6276'}
              onClick={() => onDelete(product)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Produits;
