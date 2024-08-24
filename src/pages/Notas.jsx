import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import ItemNota from '../components/ItemNota';

const Notas = ({notes}) => {
  return (
    <section>
        <header className='notes__header'>
            <h2>Mis Notas</h2>
            {/* <input type="text" autoFocus placeholder='Palabra clave...' /> */}
            <button className='btn'><CiSearch /></button>
        </header>
        <div className="notes__container">
            {
                notes.map(note => <ItemNota key = {note.id} note = {note} />)
            }
        </div>
        <Link className='btn add__btn'><BsPlusLg /></Link>
    </section>
  )
}

export default Notas