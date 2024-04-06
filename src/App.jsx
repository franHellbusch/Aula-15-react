import "./App.css";
// cuando importamos componentes no hace falta colocar la extencion de archivo .jsx/.js
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";

// componente principal
function App() {
  // logica de javascript
  const nombre = "Juan";

  // logica de html
  // utilizando fragments (simular contenedor) para evitar el error de retornar mas de un elemento
  return (
    <>
      {/* Encabezado (Reutilizado 2 veces) */}
      <Header />
      <Header />
      {/* Contenido de pagina */}
      <PageContent />
    </>
  );
}

export default App;
