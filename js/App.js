function NavBarComponent() {
  return (
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
  );
}

function FooterComponent() {
  return (
    <footer>
      <p>Av Flora Tristan s/n, La Molina - Peru</p>
      <p>animestore@gmail.com</p>
      <p>&copy; 2025 Anime Shop. Todos los derechos reservados.</p>
    </footer>
  );
}
