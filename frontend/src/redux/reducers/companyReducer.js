const initialState = { //defino el estado inicial del reductor
    companies: [],
    filterCompanies: [],
    oneCompany: {}
}

const companyReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    //console.log(action)
    //console.log(state)
    switch(action.type) {
        case 'GET_COMPANIES':
            return {
                ...state,
                companies: action.payload
            }
        case 'GET_ONE_COMPANY':
            return {
                ...state,
                oneCompany: action.payload
            }
/*         case 'UPD_CITY':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities: action.payload,
                auxCities: [...cities]
            }
        case 'DEL_CITY':
            return {
                ...state,
                cities: action.payload
            }
        case 'MOD_CITY':
            let cities = [...state.cities]
            cities.push(action.payload)
            return{
                ...state,
                cities: action.payload,
                auxCities: [...cities]
            }
        case 'FIL_CITIES':
            let filter = state.cities.filter(everyCity => everyCity.city.toLowerCase().startsWith(action.payload.toLowerCase()))
            //console.log(action.payload)
            return {
                ...state,
                filterCity: filter
            } */
        default:
            return state
    }
}
export default companyReducer