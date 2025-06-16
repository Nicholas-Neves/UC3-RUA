import './Forms.css';
const Login = () => {
    return (
        <div className="container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="inputl-fild">
                        <input type="email" name='email' placeholder="E-mail" />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    <div className="inputl-fild">
                        <input type="password" name='password' placeholder="Senha" />
                        {/* <FaLock className="icon" /> */}
                    </div>
                    <label className='check'>
                        <input type="checkbox" />lembrar minha senha!
                        <a href="#">Esqueceu a senha?</a>
                    </label>
                    
                    <button className='entrar'>Entrar</button>

                    <div className="cadastra-se">
                        <p>Não tem uma conta?  <a href="#">Cadraste-se já!</a> </p>
                    </div>
                </form>
            </div>
    )
}

export default Login

