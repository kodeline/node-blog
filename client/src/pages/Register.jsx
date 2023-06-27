import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import URLBase from "../utils/constant.js"

function Register() {

  const [input, setInput] = useState({
    username: "",
    email: "",
    password:"",
  });

  const [err, setErr] = useState(null)

  {/* Hook de React Dom */}
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${URLBase}auth/register`, input);
      navigate("/login");
    } catch(err) {  
      setErr(err.response.data);
    }
  }

  return(
    <div className="auth">
      <h2>Registrar</h2>
      <form>
        <input 
          type="text" 
          placeholder="Usuario"  
          name="username" 
          required 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          placeholder="Email"  
          name="email" 
          required 
          onChange={handleChange} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          name="password"  
          required 
          onChange={handleChange} 
        />
        <button onClick={handleSubmit}>Registrar</button>
        { err && <p>{err}</p>}
        <span>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link></span>
      </form>
    </div>
  )
}

export default Register;