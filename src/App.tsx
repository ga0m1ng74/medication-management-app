import {Routes,Route} from 'react-router-dom'
import DashboardIndex from './pages/Dashboard'
import MyLayout from './components/MyLayout'
import MedicineCategory from './pages/Medicine/category'
import MedicineInfomation from './pages/Medicine/infomation'
import MedicalArticles from './pages/Medical/articles'
import MedicalInfomation from './pages/Medical/infomation'
import UserIndex from './pages/User'
import './App.css'

function App() {

  return (
    <MyLayout>
      <Routes>
        <Route path='/dashboard' element={<DashboardIndex/>}/>
        <Route path='/medicine/categories' element={<MedicineCategory/>}/>
        <Route path='/medicine/infomation' element={<MedicineInfomation/>}/>
        <Route path='/medical/articles' element={<MedicalArticles/>}/>
        <Route path='/medical/infomation' element={<MedicalInfomation/>}/>
        <Route path='/user' element={<UserIndex/>}/>
      </Routes>
    </MyLayout>
  )
}

export default App
