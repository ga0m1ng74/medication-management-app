import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import App from './App'
import './index.css'
import LoginIndex from './pages/Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ConfigProvider>
      <Routes>
        <Route path='/' element={<LoginIndex/>}/>
        <Route path='/admin/*' element={<App/>}/>
      </Routes>
    </ConfigProvider>
  </Router>
)
