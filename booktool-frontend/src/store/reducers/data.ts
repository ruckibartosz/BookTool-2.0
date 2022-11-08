import { ReducerData, ReduxActionData } from '@/Types/reducers'
import { DATA_ACTIONS } from '@/Store/Actions/data'

const initialState: ReducerData = {
    contents: []
}

const dataState: (state: ReducerData, action: ReduxActionData<any>) => ReducerData = (state = initialState, action: ReduxActionData<any>) => {
    switch (action.type) {
        case DATA_ACTIONS.SET_CONTENTS:
            return {
                ...state,
                contents: action.payload
            }
        default:
            return state
    }
}

export default dataState
