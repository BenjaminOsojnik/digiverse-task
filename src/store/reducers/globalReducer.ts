import { 
    SET_EDIT_FORM_VISIBILITY,
    globalActionTypes} from '../actions/globalActionTypes'

import {TGlobalState} from '../../types/types'

const initialState: TGlobalState = {
    data: {
        children: [
            {
                id: '0',
                title: "Country",
                children: []
            },
            {
                id: '1',
                title: "Rock",
                children: [
                    {
                        id: '2',
                        title: "Classic Rock",
                        children: []
                    },
                    {
                        id: '3',
                        title: "Alternative",
                        children: []
                    },
                    {
                        id: '4',
                        title: "Grunge",
                        children: []
                    }
                ]
            },
            {
                id: '5',
                title: "Electronic Music",
                children: [
                    {
                        id:'6',
                        title: "Ambient",
                        children: []
                    },
                    {
                        id:'7',
                        title: "Techno",
                        children: []
                    },
                    {
                        id:'8',
                        title: "Jungle",
                        children: []
                    },
                    {
                        id:'9',
                        title: "Industrial",
                        children: []
                    },
                    {
                        id:'10',
                        title: "Drum and bass",
                        children: []
                    },
                    {
                        id:'11',
                        title: "House",
                        children: []
    
                    }
    
                ]
    
            }
    
        ]
    
    },
    isEditFormVisible: false  
}

export default function globalReducer(state: TGlobalState = initialState, action: globalActionTypes): TGlobalState {

    switch (action.type) {
        case SET_EDIT_FORM_VISIBILITY: {
            return {
                ...state,
                isEditFormVisible: action.visible
            }
        }
 
        default:
            return state
    }
}

export const SetEditFormVisibility = (visible: boolean): globalActionTypes => {
    return {
        type: SET_EDIT_FORM_VISIBILITY,
        visible
    }
}
