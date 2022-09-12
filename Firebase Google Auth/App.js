import logo from './logo.svg';
import './App.css';
import { signInWithGoogle } from './Firebase-config';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={signInWithGoogle}  >Sign in with Google</button>
      <p>{localStorage.getItem('name')}</p>
      <p>{localStorage.getItem('email')}</p>
      <img src={localStorage.getItem('profileImg')} alt="" />
    </div>
  );
}

export default App;
