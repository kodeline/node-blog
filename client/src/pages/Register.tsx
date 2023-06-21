import { Link } from 'react-router-dom';

function Register() {
  return(
    <div className="auth">
      <h2>Registrar</h2>
      <form>
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="email" placeholder="Email" required />
        <button>Registrar</button>
        <p>Esto es un error!</p>
        <span>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link></span>
      </form>
    </div>
  )
}

export default Register;