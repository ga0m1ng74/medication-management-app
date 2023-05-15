import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import LoginIndex from './pages/Login';
// import AppProvider from './components/AppProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <AppProvider>
    <Router>
      <ConfigProvider>
        <Routes>
          <Route path='/' element={<LoginIndex />} />
          <Route path='/admin/*' element={<App />} />
        </Routes>
      </ConfigProvider>
    </Router>
  // </AppProvider>
)
