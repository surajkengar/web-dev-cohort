
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Provide from './Addprovider.jsx'


createRoot(document.getElementById('root')).render(

    <Provide>
      <App/>
    </Provide>

    

    
 
)
