import React, { useState } from 'react';

const EditProductForm = ({ product, onEdit, cancelEdit }) => {
  const [updatedProduct, setUpdatedProduct] = useState(JSON.parse(JSON.stringify(product)));


  const handleChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(updatedProduct);
    cancelEdit();
  };

  const handleClose = () => {
    cancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="Modifier">
      <input name="nom" value={updatedProduct.nom} onChange={handleChange} />
      <input name="Description" value={updatedProduct.Description} onChange={handleChange} />
      <input name="Prix" value={updatedProduct.Prix} onChange={handleChange} />
      <input name="Catégorie" value={updatedProduct.Catégorie} onChange={handleChange} />
      <button type="submit">Soumettre les modifications</button>
      <button onClick={handleClose} className="close-button">Fermer</button>
    </form>
  );
};

export default EditProductForm;
