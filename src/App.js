import {BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import AppRoutes from './routes/routes';
import Header from './component/Header';

function App() {
  return (
  <>
  <Router>
   <Header/>
  <AppRoutes/>
  </Router>
  </>  
)}

export default App;
