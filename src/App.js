import './App.css'
import ThoughtForm from './components/ThoughtForm';
import ThoughtList from './components/ThoughtList';
const App = () => {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>YourThoughts</h1>
      <ThoughtForm />

      <ThoughtList />

    </div>
  )
}

export default App