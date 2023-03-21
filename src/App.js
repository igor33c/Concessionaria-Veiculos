import './styles/global.css'
import { BrowserRouter } from  'react-router-dom'
import Content from './Components/layouts/Menu';
import Menu from './Components/layouts/Content';

function App() {
  return (
    <div className='ml-2'>
      
      <BrowserRouter>
            <Content />
            <Menu />
            
        </BrowserRouter>      
      
    </div>
  );
}

export default App;
