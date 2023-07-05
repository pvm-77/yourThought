import './App.css'
import ThoughtForm from './components/ThoughtForm';
import ThoughtList from './components/ThoughtList';
import VisibilityFilter from './components/VisibilityFilter';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import About from './components/About';
import Thought from './components/Thought';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './components/Home';
import Notification from './components/Notification';
import { useSelector } from 'react-redux';
const App = () => {
  const notificationMessage = useSelector(state => state.notification)

  return (
    <div className='h-full w-full relative '>
      <Router>
        <Navbar />
        <Notification message={notificationMessage} />
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/thoughts' element={<ThoughtList />} />
          <Route path='/thoughts/:id' element={<Thought />} />
          <Route path='/createNewThought' element={<ThoughtForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App