import './styles/App.css'
import NavBar from './components/NavBar'
import Cfuncional from './components/Cfuncional'
import Cclase from './components/Cclase'
import CompFuncional from './components/CompFuncional'
import CompClase from './components/CompClase'
import CompFuncionalConProps from './components/CompFuncionalConProps'
import CompClaseConProps from './components/CompClaseConProps'
import Footer from './components/Footer'

function App() {
  let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
  let array2 = ['omar','eze','elias','marco']
  return (
    <>
      <NavBar />
      <Cfuncional />
      <Cclase />
      {/* <CompFuncional /> */}
      {/* <CompClase /> */}
      {/* <CompFuncionalConProps texto='componente funcional' nombres={array1} /> */}
      {/* <CompClaseConProps texto='componente de clase' nombres={array2} /> */}
      <Footer />
    </>
  );
}

export default App;
