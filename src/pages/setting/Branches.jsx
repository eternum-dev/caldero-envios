import { useState } from "react";
import { CustomButton } from "../../components/CustomButton";
import { DisplayInput } from "../../components/DisplayInput";
import { Hr } from "../../components/Hr";
import "./branches.css";

const initialBranches = [
  { nombre: "Caldero de la bruja", coord: "123456" },
  { nombre: "Sushi del brujo", coord: "987654" },
];

export const Branches = () => {
  const [branches, setBranches] = useState(initialBranches);

  const addNewBranches = (event) => {
    event.preventDefault();
    
    setBranches(prev => [
      ...prev,
      { nombre: "Nuevo local", coord: "1o1o2o2o" },
    ]); 
  };

  return (
    <div className="branches">
      <h1>Branches</h1>
      <Hr />
      <form action="">
        <div className="branches__row branches__row--header">
          <span>Nombre</span>
          <span>Coordenadas</span>
        </div>
        {branches.map(({ nombre, coord }, index) => (
          <div className="branches__row" key={index}>
            <DisplayInput value={nombre} />
            <DisplayInput value={coord} />
          </div>
        ))}

        <CustomButton size="fit-content" onClick={addNewBranches}>añadir</CustomButton>
      </form>
    </div>
  );
};
