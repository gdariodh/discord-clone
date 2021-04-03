import "./login.css";
// firebase es nuestra instancia propia donde estan metodos, y conexion de la app con la api
import { auth, provider } from "../../firebase";

const Login = () => {

  // abre el modal de auth de google y hace al auth con google
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).catch((err) => console.log(err.message));
  };
  // en app.js se guarda el authUser en el state
  // por el metodo de onAuthStateChanged

  return (
    <div className="login">
      <div className="login__card">
        <div className="login__cardHeader">
          <h3>Discord clone</h3>
          <div className="login__img">
            <img
              src="https://www.pdvg.it/wp-content/uploads/2021/03/Discord.jpeg"
              alt="discord icon"
            />
          </div>
        </div>
        <div className="login__cardBody">
          <div className="login__cardBodyGoogle">
            <h4>Login with</h4>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=2159024400&v=beta&t=r--a5-Dl4gvVE-xIkq8QyBzZ8mQ-OYwBOrixNzR95H0"
              alt="google icon"
            />
          </div>
          <button onClick={loginWithGoogle}>Login</button>
        </div>

        <div className="login__cardFooter">
          <p>by gdariodh</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
