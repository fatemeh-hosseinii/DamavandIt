import { createRoot } from 'react-dom/client'
import App from './App/App'
import './main.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App/>
</Provider>
   

)
