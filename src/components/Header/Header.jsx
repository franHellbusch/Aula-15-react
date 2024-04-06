// importando css
import "./Header.css";

// Crear nuestro componente
// Los componentes no solo permiten separar codigo
// Si no tambien permite reutilizar el mismo codigo
function Header() {
  return (
    <header className='Header'>
      <h1>Hola mundo</h1>
      <nav className='HeaderNavigation'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
