import { Link } from 'react-router-dom';

function Login() {
  return(
    <div className="auth">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar</button>
        <p>Esto es un error!</p>
        <span>¿No tienes cuenta? <Link to="/register">Registrate</Link></span>
      </form>
    </div>
  )
}

export default Login;