//Import Libs
import {
    Routes,
    Route,
} from 'react-router-dom'

//Import Pages
import Auth from '../Views/Auth/Auth'
import Home from '../Views/Home/Home'

const AppRoutes = () => {
  return <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
  </>
}

export default AppRoutes