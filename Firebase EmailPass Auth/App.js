import "./App.css";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase/Firebase";

function App() {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //! firebase returns promise so here used Async/await
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPass
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      //* signInWithEmailAndPassword are function from firebase which takes auth, loginEmail and Password
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      );
    } catch (error) {
      console.log(error);
    }
  };
  //? for Logout singnOut function used
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div className="create-user">
        <h4>Create Your Account</h4>
        <label for="reg-email">Email: </label>
        <input
          type="text"
          placeholder="email"
          id="reg-email"
          onChange={(e) => setRegEmail(e.target.value)}
        />
        <label for="reg-pass">Password</label>
        <input
          type="text"
          placeholder="Password"
          id="reg-pass"
          onChange={(e) => setRegPass(e.target.value)}
        />
        <button onClick={register}>Create Account</button>
      </div>
      <div className="create-user">
        <h4>Login</h4>
        <label for="log-email">Email: </label>
        <input
          type="text"
          placeholder="email"
          id="log-email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <label for="log-pass">Password</label>
        <input
          type="text"
          placeholder="Password"
          id="log-pass"
          onChange={(e) => setLoginPass(e.target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
      <div>
        <h3>Logged in user</h3>
        {user?.email}
        <button onClick={logOut}>Sign Out </button>
      </div>
    </div>
  );
}

export default App;
