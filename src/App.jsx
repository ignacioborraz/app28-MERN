import './styles/App.css'
import NavBar from './components/NavBar'
import Cfuncional from './components/Cfuncional'
import Cclase from './components/Cclase'
import CfuncionalConProps from './components/CfuncionalConProps'
import CclaseConProps from './components/CclaseConProps'
import CfuncionalConEstado from './components/CfuncionalConEstado'
import CclaseConEstado from './components/CclaseConEstado'
import Footer from './components/Footer'

function App() {
  let array1 = ['dolores','luciana','mayra','lau','guada','sofi']
  let array2 = ['omar','eze','elias','marco']
  let array3 = ['apellido1', 'apellido2'];
  return (
    <>
      <NavBar />
      <Cfuncional />
      <Cclase />
      <CfuncionalConProps apellidos={array3}  nombres={array1} />
      <CclaseConProps nombres={array2}/>
      <CfuncionalConEstado />
      <CclaseConEstado />
      <Footer />
    </>
  );
}

export default App
