import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css'
import UserParent from './components/section/UserParent';
import MainSection from './components/section/MainSection';

function App() {

  return (
    <>
      <UserParent/>
      <MainSection/>
    </>
  )
}

export default App
