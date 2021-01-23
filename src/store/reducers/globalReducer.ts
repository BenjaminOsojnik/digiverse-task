import { 
    SET_EDIT_FORM_VISIBILITY_ACTION,
    SET_EDIT_SELECTED_OBJECT_ACTION,
    UPDATE_OBJECT_ACTION,
    UPDATE_SELECTED_OBJECT_ACTION,
    DELETE_OBJECT_ACTION,
    IMPORT_FROM_JSON_ACTION,
    globalActionTypes} from '../actions/globalActionTypes'

import {TGlobalState, TMusic} from '../../types/types'
import generateGuidG4 from '../../functions/generateGuidG4'
import { emptyObject } from '../../constants/emptyObject'
const initialState: TGlobalState = {
    data: {
        children: [
            {
                id: generateGuidG4(),
                title: "Country",
                children: []
            },
            {
                id: generateGuidG4(),
                title: "Rock",
                children: [
                    {
                        id: generateGuidG4(),
                        title: "Classic Rock",
                        children: []
                    },
                    {
                        id: generateGuidG4(),
                        title: "Alternative",
                        children: []
                    },
                    {
                        id: generateGuidG4(),
                        title: "Grunge",
                        children: [
                            {
                                id: generateGuidG4(),
                                title: "Grunge",
                                children: [
        
                                    
                                ]
                            },
                            {
                                id: generateGuidG4(),
                                title: "Grunge",
                                children: [
        
                                    
                                ]
                            },
                            {
                                id: generateGuidG4(),
                                title: "Grunge",
                                children: [
        
                                    
                                ]
                            }

                        ]
                    }
                ]
            },
            {
                id: generateGuidG4(),
                title: "Electronic Music",
                children: [
                    {
                        id:generateGuidG4(),
                        title: "Ambient",
                        children: []
                    },
                    {
                        id:generateGuidG4(),
                        title: "Techno",
                        children: []
                    },
                    {
                        id:generateGuidG4(),
                        title: "Jungle",
                        children: []
                    },
                    {
                        id:generateGuidG4(),
                        title: "Industrial",
                        children: []
                    },
                    {
                        id:generateGuidG4(),
                        title: "Drum and bass",
                        children: []
                    },
                    {
                        id:generateGuidG4(),
                        title: "House",
                        children: []
    
                    }
    
                ]
    
            }
    
        ]
    
    },
    isEditFormVisible: false,
    selectedObject: {
        children:[]
    }
}



export default function globalReducer(state: TGlobalState = initialState, action: globalActionTypes): TGlobalState {
    
    
    const getNewData = (parent: TMusic, editedObject: TMusic) => {
        let tempData = parent
        if (editedObject.id === parent.id){
            tempData.title = editedObject.title
            tempData.children = editedObject.children
        }

        else {
            if (parent.children.length > 0)   {
                parent.children.map(obj => {
                    getNewData(obj, editedObject)
                   return {...state.data, tempData}
                })
            }
        }

        return {...state.data, tempData}

    }

    switch (action.type) {
        case SET_EDIT_FORM_VISIBILITY_ACTION: {
            return {
                ...state,
                isEditFormVisible: action.visible
            }
        }

        case SET_EDIT_SELECTED_OBJECT_ACTION: {
            return {
            ...state,
            selectedObject: action.object, isEditFormVisible: true
            }
        }
        
        case UPDATE_OBJECT_ACTION: {
            if (action.object.id !== 'top'){
                let tempData = getNewData(state.data, action.object)
                return {
                    ...state, data: tempData, isEditFormVisible: false, selectedObject: emptyObject
                }
                
            }
            else {
                let tempData = state.data
                let tempObject = action.object
                tempObject.id = generateGuidG4()
                tempData.children.push(tempObject)
                return {
                    ...state, data: tempData, isEditFormVisible: false, selectedObject: emptyObject
                }
            }
        }

        case UPDATE_SELECTED_OBJECT_ACTION: {
            return {
                ...state, selectedObject: action.object
            }
        }

        case DELETE_OBJECT_ACTION: {
            let tempData = getNewData(state.data, action.object)
            return {
                ...state, data: tempData, isEditFormVisible: false, selectedObject: emptyObject
            }
        }
        
        case IMPORT_FROM_JSON_ACTION: {
            if (action.data.children !== []){
                let stateTemp = initialState
                stateTemp.data = action.data
                return {
                    ...stateTemp
                }
            }
            else {
                console.error('Invalid JSON format')
                return {
                    ...state
                }
            }

        }

        default:
            return state
    }
}

export const SetEditFormVisibility = (visible: boolean): globalActionTypes => {
    return {
        type: SET_EDIT_FORM_VISIBILITY_ACTION,
        visible
    }
}

export const SetEditSelectedObject = (object: TMusic): globalActionTypes => {
    return {
        type: SET_EDIT_SELECTED_OBJECT_ACTION,
        object
    }
}

export const UpdateObject = (object: TMusic): globalActionTypes => {
    return {
        type: UPDATE_OBJECT_ACTION,
        object
    }
}

export const UpdateSelectedObject = (object: TMusic): globalActionTypes => {
    return {
        type: UPDATE_SELECTED_OBJECT_ACTION,
        object
    }
}

export const DeletedObject = (object: TMusic): globalActionTypes => {
    return {
        type: DELETE_OBJECT_ACTION,
        object
    }
}

export const ImportFromJson = (data: TMusic): globalActionTypes => {
    return {
        type: IMPORT_FROM_JSON_ACTION,
        data
    }
}