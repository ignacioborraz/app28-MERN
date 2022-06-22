const initialState = { //defino el estado inicial del reductor
    jobs: [], //para contener todos los trabajos        [trabajo1,trabajo2,trabajo3,trabajo4]
    filterJobs: [], //para contener todos los trabajos filtrados
    oneJob: {}, //para contener un unico trabajo
    newJob: {}, //para contener un nuevo trabajo       {trabajo5}
    aux: [] //estado auxiliar (a ver para que sirve)
}

const jobReducer = (state = initialState, action) => { //defino el reductor, que va a depender del estado inicial y de una accion
    //console.log(action)
    console.log(state)
    switch(action.type) {
        case 'CREATE_JOB':
            let previousJobs = state.jobs
            return {
                ...state,
                newJob: action.payload,
                jobs: previousJobs.push(action.payload)
            }
        case 'GET_JOBS':
            return {
                ...state,
                jobs: action.payload
            }
        case 'GET_ONE_JOB':
            return {
                ...state,
                oneJob: action.payload
            }
        case 'FILTER_JOBS':
            let filter = state.jobs.filter(everyJob => everyJob.nameJob.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            //console.log(action.payload)
            return {
                ...state,
                filterCity: filter
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
         */
        default:
            return state
    }
}
export default jobReducer