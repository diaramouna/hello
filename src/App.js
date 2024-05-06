import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      
      <Message />
      <Team />
      <Team name= ""/>
      <Team name="" />
    </div>
  );
}

export default App;
