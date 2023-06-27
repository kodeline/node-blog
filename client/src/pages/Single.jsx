import Foto from "../img/foto.png"
import "./Single.scss"
import { Link } from "react-router-dom"
import {  CiEdit , CiTrash } from "react-icons/ci";
import Sidebar from "../components/Sidebar";

function Single() {
  return (
    <div className="single">
      <div className="content">
        
        <img src="https://picsum.photos/id/227/600/400 " />
        <div className="user">
          <img src={Foto} />
          
          <div className="info">
            <span>Joaquin</span>
            <p>Publicado hace 2 dias</p>
          </div>
          
          <div className="edit">
            <Link to={`/write?edit=2`}> <CiEdit /> </Link>
          </div>
          
          <div className="delete">
            <Link to={`/write?delete=2`}> <CiTrash /> </Link>
          </div>   
        </div>

        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores dolore ipsam ad molestiae cum dolores obcaecati assumenda, error consequuntur nihil magnam ipsa perferendis quisquam, tempora, corrupti officiis aliquam exercitationem!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit non eos natus, quas quisquam pariatur ipsam mollitia consequuntur assumenda molestias perspiciatis magni vero, vel nisi cumque animi, hic neque?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis minus quia magnam eligendi accusantium eaque iure ad officia, voluptate ullam soluta inventore reprehenderit quis incidunt repellendus totam illum voluptatum. 
          Iure eligendi deleniti nobis architecto pariatur quia corporis qui quasi doloremque tempora unde repudiandae dolores nostrum fuga voluptas quam vel accusamus sed, officiis aut voluptates optio dolor delectus omnis. At ratione alias fugit fuga asperiores 
          debitis nulla, neque est tempora molestiae. Fuga esse enim nesciunt maiores atque! Aperiam ab corporis quibusdam suscipit dolore ut? Illo nostrum sunt temporibus minima, laborum assumenda ducimus veritatis in ipsa ratione quo illum quos necessitatibus provident 
          eaque incidunt est inventore. Eos quo dolorum quidem odit placeat blanditiis, debitis architecto nam expedita, minima quam officia error adipisci explicabo fuga ex sequi fugiat ducimus. Natus nulla quaerat culpa eveniet ex? Ab et qui possimus odio deleniti error 
          ipsum magnam obcaecati consectetur distinctio id pariatur deserunt odit expedita ea maiores, aut vel quo aliquam similique? Nihil itaque quaerat incidunt cupiditate asperiores, sunt quos vitae voluptates impedit sint tenetur labore, blanditiis qui ut? Porro tempore 
          eveniet quo eum ad nostrum, illo blanditiis corporis libero explicabo hic aliquid ea. Nam sapiente perferendis necessitatibus sit saepe molestias eum, veniam tenetur quas consectetur!
        </p>
      </div>
      <div className="sidebar">
        <Sidebar/>
      </div>
     
    </div>
  )
}

export default Single