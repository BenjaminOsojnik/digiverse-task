import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import {TGlobalState} from '../../types/types'

export type TRootReducer = {
    globalState: TGlobalState,
}

const rootReducer = combineReducers<TRootReducer>({
    globalState: globalReducer
})

export default rootReducer