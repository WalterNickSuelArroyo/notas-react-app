import { IoIosArrowBack } from "react-icons/io"
import { RiDeleteBin6Line } from "react-icons/ri"
import { Link } from "react-router-dom"

const EditarNota = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn"><IoIosArrowBack /></Link>
        <button className="btn lg primary">Guardar</button>
        <button className="btn danger"><RiDeleteBin6Line /></button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea rows="28" placeholder="Detalles de la nota"></textarea>
      </form>
    </section>
  )
}

export default EditarNota