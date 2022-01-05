import './styles.css';

function App() {

  return (
    <>
      <MyComponent />
      <AboutMe />
    </>
  );

}

const MyComponent = () => {

  const me ={
    Nombre: "Giancarslos Crdenas Galarza",
    Edad: "30 años",
    Peliculas: "Loco",
    Musica:"acdc"
  }

  return (
    <div className="App">
      <ul>
        <li> <b>Nombre:</b> {me.Nombre}</li> 
        <li> <b>Edad:</b> {me.Edad}</li>
        <li> <b>Pelicula favorita:</b> {me.Peliculas}</li> 
        <li> <b>Musica favorita:</b> {me.Musica}</li> 
      </ul>
    </div>
  );
}

const AboutMe = () => {

  const me ={
    Nombre: "Giancarslos Crdenas Galarza",
    Edad: "30 años",
    Peliculas: "Loco",
    Musica:"acdc"
  }

  return (
    <div className="Hob">
      <h4 className='toto'>MIS HOBBIES</h4>
        <ul>
          <li>Musica</li> 
          <li>Ejercicio</li>
          <li>Video Juego</li> 
          <li>Pelicula</li> 
        </ul>
    </div>
  );
}

export default App;

