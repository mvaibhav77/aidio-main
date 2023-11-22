import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Result from './components/Result';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModelProvider } from './context/ModelContext';

function App() {
  return (
    <ModelProvider>
      <Navbar />
      <Result />
      <About />
      <ToastContainer />
    </ModelProvider>
  );
}

export default App;
