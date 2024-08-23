import { Link } from 'react-router-dom'

const ItemNota = ({note}) => {
  return (
    <Link to={`/editar-nota/${note.id}`} className='note'>
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default ItemNota