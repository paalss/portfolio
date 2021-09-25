import logo from './logo.svg';
import './App.css';
import Nav from './components/layout/Nav'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
