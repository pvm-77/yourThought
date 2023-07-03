import './App.css'
import ThoughtForm from './components/ThoughtForm';
import ThoughtList from './components/ThoughtList';
import VisibilityFilter from './components/VisibilityFilter';
const App = () => {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>YourThoughts</h1>
      <ThoughtForm />
      <VisibilityFilter/>

      <ThoughtList />

    </div>
  )
}

export default App