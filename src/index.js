import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // redux-persist를 통해 새로고침시 해결 가능 index.js에 코드3~4줄 추가!!!!
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
