import { CiSearch } from 'react-icons/ci';
import dummyNotes from '../dummy_notes';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import ItemNota from '../components/ItemNota';

const Notas = () => {
  return (
    <section>
        <header className='notes__header'>
            <h2>Mis Notas</h2>
            {/* <input type="text" autoFocus placeholder='Palabra clave...' /> */}
            <button className='btn'><CiSearch /></button>
        </header>
        <div className="notes__container">
            {
                dummyNotes.map(note => <ItemNota key = {note.id} note = {note} />)
            }
        </div>
        <Link className='btn add__btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notas