import { legacy_createStore as createStore} from 'redux'
import { reduser } from './reduser'


export const store = createStore(reduser)
