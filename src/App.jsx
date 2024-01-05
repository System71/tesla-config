import "./App.css";
import { useState } from "react";

function App() {
  const data = {
    type: [
      {
        name: "grande autonomie",
        price: 90700,
      },
      {
        name: "Performance",
        price: 106700,
      },
    ],
    color: [
      {
        name: "blanc",
        price: 0,
      },
      {
        name: "noir",
        price: 1000,
      },
    ],
  };

  const [typePrice, setTypePrice] = useState(90700);
  const [colorPrice, setColorPrice] = useState(0);
  const [price, setPrice] = useState(typePrice + colorPrice);
  // État pour suivre le bouton "type" actif
  const [activeType, setActiveType] = useState("type1");
  // État pour suivre le bouton "couleur" actif
  const [activeColor, setActiveColor] = useState("color1");

  // Fonction pour mettre à jour le bouton "type" actif
  const handleTypeClick = (type) => {
    setActiveType(type);
  };

  // Fonction pour mettre à jour le bouton "couleur" actif
  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  // Style pour les boutons actifs/inactifs
  const buttonStyle = (buttonType, buttonValue) => ({
    border:
      (activeType === buttonValue && buttonType === "type") ||
      (activeColor === buttonValue && buttonType === "color")
        ? "1px solid blue"
        : "1px solid gray",
  });

  return (
    <div className="container">
      <h1>Tesla Config</h1>
      <h2>Sélectionner votre véhicule</h2>
      <button
        style={buttonStyle("type", "type1")}
        onClick={() => {
          const newTypePrice = data.type[0].price;
          const newPrice = newTypePrice + colorPrice;

          setTypePrice(newTypePrice);
          setPrice(newPrice);

          handleTypeClick("type1");
        }}
      >
        Grande Autonomie - 90 700 €
      </button>
      <button
        style={buttonStyle("type", "type2")}
        onClick={() => {
          const newTypePrice = data.type[1].price;
          const newPrice = newTypePrice + colorPrice;

          setTypePrice(newTypePrice);
          setPrice(newPrice);

          handleTypeClick("type2");
        }}
      >
        Performance - 106 700 €
      </button>
      <h2>Sélectionnez la couleur</h2>
      <button
        style={buttonStyle("color", "color1")}
        onClick={() => {
          const newColorPrice = data.color[0].price;
          const newPrice = typePrice + newColorPrice;

          setColorPrice(newColorPrice);
          setPrice(newPrice);

          handleColorClick("color1");
        }}
      >
        Blanc Nacré Multicouches - 0 €
      </button>
      <button
        style={buttonStyle("color", "color2")}
        onClick={() => {
          const newColorPrice = data.color[1].price;
          const newPrice = typePrice + newColorPrice;

          setColorPrice(newColorPrice);
          setPrice(newPrice);

          handleColorClick("color2");
        }}
      >
        Noir Uni - 1000 €
      </button>
      <span>{price} €</span>
    </div>
  );
}

export default App;
