import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import ItemNota from "../components/ItemNota";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const Notas = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>Mis Notas</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="Palabra clave..."
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {
          filteredNotes.length === 0 && <p className="empty__notes">No se encontraron notas</p>
        }
        {filteredNotes.map((note) => (
          <ItemNota key={note.id} note={note} />
        ))}
      </div>
      <Link to="/crear-nota" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notas;
