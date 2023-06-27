import { useState } from 'react';
import ReactQuill, { displayName } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Write.scss"


function Write() {

  const [value, setValue] = useState('');

  return(
    <section className="add">
      <div className="content">
        <input type="text" placeholder="Titulo" />
        <div className="editor-container">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Publicaciones</h2>
          <span>
            <b>Estado:</b>Borrador
          </span>
          <span>
            <b>Visibilidad:</b>Publico
          </span>
          {/* Input para subir una imagen */}
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">Cargar Imagen</label>
          {/* Botones para Guardar como borrador y actualizar */}
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button>Actualizar</button>
          </div>
        </div>
        <div className="item">
          <h2>Categoria</h2>
          <div className="category">
            <input type="radio" name="category" value="html" id="html" />
            <label htmlFor="">HTML</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="css" id="css" />
            <label htmlFor="">CSS</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="javascript" id="javascript" />
            <label htmlFor="">JavaScript</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="python" id="python" />
            <label htmlFor="">Python</label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Write