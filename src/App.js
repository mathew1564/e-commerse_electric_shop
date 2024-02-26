import Body from './components/body/Body'
import Topbar from './components/topbar';
import Footer from './components/footer/footer';
import NavigationBar from './components/navbar/NavigationBar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
   return (
      <Router>
            <>
            {/* TOP NAVIGATION -PHI LONG */} 
            <Topbar/>
         
            {/* BOT NAVIGATION -PHUONG ANH */}
            <div className='d-none d-md-none d-lg-block'>
               <NavigationBar />
            </div>
            
            {/* Sidebar TRUNG  NGUYEN */}
            <Body></Body>

         </>  
      </Router>

  );
}

export default App;
