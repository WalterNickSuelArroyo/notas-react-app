import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notas from "./pages/Notas";
import CrearNota from "./pages/CrearNota";
import EditarNota from "./pages/EditarNota";
// import dummyNotes from './dummy_notes';
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notas notes={notes}/>} />
          <Route path="/crear-nota" element={<CrearNota setNotes={setNotes} />} />
          <Route path="/editar-nota/:id" element={<EditarNota />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
