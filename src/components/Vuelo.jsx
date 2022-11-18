import { useState } from "react";
import "./App.css"
function InfoVuelo({ info }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [pasajero, setPasajero] = useState("");
  const [salida, setSalida] = useState();

  const clickSalida = (e) => {
    setSalida(e.target.value)
  }
  const selecOrigen = (e) => {
    setOrigen(e.target.value);
  };
  const selecDestino = (e) => {
    setDestino(e.target.value);
  };
  const selecPasajero = (e) => {
    setPasajero(e.target.value);
  };


  return (
    
    <div>
      <div className="opciones">
      <select name="origen" id="origen" onChange={selecOrigen}>
        <option value="">ORIGEN </option>
        <option value="COR">Cordoba </option>
        <option value="BRC">Bariloche </option>
        <option value="EPA">El Palomar </option>
        <option value="MDZ">Mendoza </option>
      </select>
      <select name="destino" id="destino" onChange={selecDestino}>
        <option value="">DESTINO </option>
        <option value="COR">Cordoba </option>
        <option value="BRC">Bariloche </option>
        <option value="EPA">El Palomar </option>
        <option value="MDZ">Mendoza </option>
      </select>
      <select name="pasajero" id="pasajero" onChange={selecPasajero}>
        <option value="">CANTIDAD DE PASAJEROS</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
      </select>
      </div>
      

      {info.map((item, i) => {
        if (
          item.origin === origen &&
          item.destination === destino &&
          item.availability == pasajero
        )
          return (
            <div key={i}>
              <button value={item.data} onClick={clickSalida}>
                Fecha: {item.data}
              </button>
              <h2 >El Precio es: {item.price}</h2>
            </div>
          );
      })}
      <div>
        <h3> El origen del viaje es: {origen}</h3>
        <h3>El destino del viaje es: {destino}</h3>
        <h3>El vuelo sale la fecha: {salida} </h3>
      </div>
    </div>
  );
}

export default InfoVuelo;
