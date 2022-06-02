import './styles/App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
  let array2 = ['omar','eze','elias','marco']
  return (
    <>
      <NavBar />
      <Body texto='body 1' nombres={array1} />
      <Body texto='este es el body 2' nombres={array2} />
      <Footer />
    </>
  );
}

export default App;
