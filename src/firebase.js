import firebase from "firebase";

// required: para conectar app con firebase
const firebaseConfig = {
  apiKey: "AIzaSyCthF_1ym9lCNjVQf80Vo9eqa-B2CcyIEY",
  authDomain: "discord-clone-ez.firebaseapp.com",
  projectId: "discord-clone-ez",
  storageBucket: "discord-clone-ez.appspot.com",
  messagingSenderId: "4708457574",
  appId: "1:4708457574:web:3bb81515fa22b77c82a1a7",
  measurementId: "G-GSF42DWK8N",
};

// inicializar firebase en la app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// TODO: inicializamos metodos de firebase

// para acceder a la base de datos de firebase y metodos
const db = firebaseApp.firestore();
// contiene metodos de autenticacion
const auth = firebase.auth();
// auth con servicio de google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
