
import './App.css';
import { Footer, Header } from './components';
import { Allroutes } from './routes/Allroutes';

function App() {
  return (
    <div className="App dark:bg-slate-800" >
      <Header />
     <Allroutes />
     <Footer />
    </div>
  );
}

export default App;
