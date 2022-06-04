import { createContext, useState } from "react";
import { db } from "./../App";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const contextoUser = createContext();
const { Provider } = contextoUser;

const UserContext = ({ children }) => {
  const [user, setUser] = useState([]);

  const addUser = (usuario) => {
    const usersCollection = collection(db, "usuarios");
    const queryDB = query(usersCollection, where("email", "==", usuario.email));

    const consultaDbQuery = getDocs(queryDB);
    consultaDbQuery
      .then((res) => {
        const usuarioEncontrado = res.docs.map((doc) => {
          const obj = {
            ...doc.data(),
            id: doc.id,
          };
          return obj;
        });

        setUser(usuarioEncontrado[0]);
      })
      .catch(() => {
      });
  };

  const logOut = () => {
    setUser([]);
  };

  return <Provider value={{ addUser, logOut, user }}>{children}</Provider>;
};

export default UserContext;
