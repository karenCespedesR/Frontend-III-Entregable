
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
import React,{ useState, useEffect } from "react";

export default function Item({id,nombre,descripcion,stock, sumarCarrito}) {

  const [cantidadStock,setCantidadStock]= useState(stock);
  const [texto,setTexto]= useState('Comprar');
  const [botonOff,setBotonOff]=useState(false);
  const [color, setColor] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const styles ={color,backgroundColor};

  const click = ()=>{
    if(cantidadStock>1){
      sumarCarrito();
      setCantidadStock(cantidadStock-1);
      
    }else if(cantidadStock===1){
      sumarCarrito();
      setTexto('Sin Stock');
      setCantidadStock('agotado');
      setBotonOff(true);
      setColor('rgb(155, 0, 0)');
      setBackgroundColor('rgb(255, 178, 178)')
    }else{
      return
    }
  };
  
  useEffect(() => {
    
    
  },[]);

  useEffect(() => {
    setCantidadStock(stock)
    setBotonOff(true);
  }, [stock,botonOff]);
  
  

  return (
    <div className='producto' key={id}>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En stock:
        <span style={styles}>{cantidadStock}</span>
      </h5>
      <button onClick={() => click()} disabled={cantidadStock==='agotado'&&botonOff!==false} key={id}>{texto}</button>
    </div>
  )
}
