import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [nom, setNom] = useState('');
    const [Description, setDescription] = useState('');
    const [Prix, setPrix] = useState('');
    const [Catégorie, setCatégorie] = useState('');
    const [image, setImage] = useState(null);


    const onSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    
        const reader = new FileReader(); // Crée une nouvelle instance de FileReader pour lire le fichier image
        reader.onload = () => { // Lorsque le chargement de l'image est terminé
            const imageBase64 = reader.result; // Récupère les données de l'image sous forme de base64
            onAdd({ nom, Description, Prix, Catégorie, image: imageBase64 }); // Appelle la fonction onAdd en passant les données du produit, y compris l'image
        };
        reader.readAsDataURL(image); // Lit le fichier image en tant que données URL
    
        setNom(''); // Réinitialise la valeur de nom
        setDescription(''); // Réinitialise la valeur de Description
        setPrix(''); // Réinitialise la valeur de Prix
        setCatégorie(''); // Réinitialise la valeur de Catégorie
        setImage(null); // Réinitialise la valeur de l'image
    };
    
    
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Récupère le premier fichier sélectionné dans le champ d'entrée de fichier
        setImage(file); // Met à jour l'état de l'image avec le fichier sélectionné
    };
    
    
    return (
        <form onSubmit={onSubmit} className='Ajout'> 
           
            <div>
                <label>Nom :</label>
                <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
            </div>
            <div>
                <label>Description :</label>
                <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Prix :</label>
                <input type="number" value={Prix} onChange={(e) => setPrix(e.target.value)} required />
            </div>
            <div>
                <label>Catégorie :</label>
                <input type="text" value={Catégorie} onChange={(e) => setCatégorie(e.target.value)} required />
            </div>
            <div>
                <label>Image </label>
                <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <input type="submit" value="Ajouter"  className='btn'/>
        </form>
    )
}

export default AddProduct;
