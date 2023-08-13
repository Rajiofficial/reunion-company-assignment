

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './component/Home';
import Add from './component/Add';
import Update from './component/Update';
import Participantlist from './component/Participantlist';

function App() {
  return (
    
    
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/update/:id' element={<Update/>}/>
<Route path='/part/:id' element={<Participantlist/>}/>



</Routes>


</BrowserRouter>
  
  );
}

export default App;
