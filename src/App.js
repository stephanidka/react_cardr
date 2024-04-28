import './App.css';
import Card from './components/card';

function App() {
  
  return (
    <div className="App">
      <Card 
          unlimited = "300"
          price = "300"
          speed = "10"
      />
      <Card 
          unlimited = "450"
          price = "450"
          speed = "50"/>
      <Card 
          unlimited = "550"
          price = "550"
          speed = "100"/>
      <Card 
          unlimited = "1000"
          price = "1000"
          speed = "200"/>
    </div>
  );
}

export default App;
