import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";

function App() {
  return (
      <div>
        <Counter title="Profile" value={1} image="images/profile.jpg" />
        <Counter title="Profile2" value={10} image="images/profile2.jpg" />
      </div>
  );
}

export default App;
