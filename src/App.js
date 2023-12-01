import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from './Components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
        <AllRoutes/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
