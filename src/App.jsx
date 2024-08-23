import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notas from "./pages/Notas";
import CrearNota from "./pages/CrearNota";
import EditarNota from "./pages/EditarNota";

const App = () => {
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notas />} />
          <Route path="/crear-nota" element={<CrearNota />} />
          <Route path="/editar-nota/:id" element={<EditarNota />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
