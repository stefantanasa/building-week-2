import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import MyNavbar from'./components/Navbar/MyNavbar'
import MyFooter from'./components/Footer/MyFooter'

function App() {
  return (
    <div className="App">
     <MyNavbar/>
     <MyFooter/>
    </div>
  );
}

export default App;
