import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import UserList from './pages/UserList';
import UserDetailsPage from './pages/UserDetails';
function App() {
 

  return (
    <>
      <Router>
        <Routes>
        <Route path="" element={<UserList />} />
        <Route path="/usuario/:userId" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
