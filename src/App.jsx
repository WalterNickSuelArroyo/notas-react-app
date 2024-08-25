import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notas from "./pages/Notas";
import CrearNota from "./pages/CrearNota";
import EditarNota from "./pages/EditarNota";
// import dummyNotes from './dummy_notes';
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);
  
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notas notes={notes}/>} />
          <Route path="/crear-nota" element={<CrearNota setNotes={setNotes} />} />
          <Route path="/editar-nota/:id" element={<EditarNota notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
