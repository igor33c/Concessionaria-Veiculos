import './styles/global.css'
import { BrowserRouter } from  'react-router-dom'
import Content from './Components/layouts/Content';

function App() {
  return (
    <div>      
      <BrowserRouter>
            <Content /> 
        </BrowserRouter>      
      
    </div>
  );
}

export default App;
