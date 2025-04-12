function App() {
  return (
    <div>
      <nav class="navbar">
        <h1 class="navbar-title">Anime Store</h1>
        <button class="hamburger" aria-label="Toggle menu">
          &#9776;
        </button>
        <ul class="navitems">
          <li>
            <a href="index.html">Catalogo</a>
          </li>
          <li>
            <a href="contacto.html">Contactanos</a>
          </li>
          <li>
            <a href="torneo.html">Torneo</a>
          </li>
          <li>
            <a href="game.html">Game</a>
          </li>
          <li>
            <a href="#">Acerca</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Renderizar la aplicación principal
ReactDOM.render(<App />, document.getElementById("root"));
