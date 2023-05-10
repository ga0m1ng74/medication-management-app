import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Router>
)
