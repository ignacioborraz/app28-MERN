//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import companyReducer from './companyReducer'
import jobReducer from './jobReducer'

const mainReducer = combineReducers({companyReducer,jobReducer})

export default mainReducer
