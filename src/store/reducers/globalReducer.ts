import { 
    SET_EDIT_FORM_VISIBILITY_ACTION,
    SET_EDIT_SELECTED_OBJECT_ACTION,
    UPDATE_OBJECT_ACTION,
    UPDATE_SELECTED_OBJECT_ACTION,
    DELETE_OBJECT_ACTION,
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
    
    
    const findNestedArray = (parent: TMusic, editedObject: TMusic) => {
        let tempData = parent
        if (editedObject.id === parent.id){
            tempData.title = editedObject.title
            tempData.children = editedObject.children
        }

        else {
            if (parent.children.length > 0)   {
                parent.children.map(obj => {
                   findNestedArray(obj, editedObject)
                   return {...state.data, tempData}
                })
            }
        }

        return {...state.data, tempData}

    }

    // const deleteNestedArray = (parent: TMusic, deletedObject: TMusic) => {
    //     let tempData = parent
    //     tempData.children.map(child => {
    //         if (child.id === deletedObject.id){
    //             console.log(true)
    //             let b:TMusic = {id: tempData.id, title: tempData.title, children: tempData.children.filter(ch => ch.id !== deletedObject.id)}
    //             console.log(b)
    //             return b
    //         }
    //         else {
    //             deleteNestedArray(child, deletedObject)
    //         }

    //     })
    // }

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
            let tempData = findNestedArray(state.data, action.object)
            return {
                ...state, data: tempData, isEditFormVisible: false, selectedObject: emptyObject
            }
        }

        case UPDATE_SELECTED_OBJECT_ACTION: {
            return {
                ...state, selectedObject: action.object
            }
        }

        case DELETE_OBJECT_ACTION: {
            let tempData = findNestedArray(state.data, action.object)
            console.log(tempData)
            return {
                ...state, data: tempData
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

export const updateSelectedObject = (object: TMusic): globalActionTypes => {
    return {
        type: UPDATE_SELECTED_OBJECT_ACTION,
        object
    }
}

export const deletedObject = (object: TMusic): globalActionTypes => {
    return {
        type: DELETE_OBJECT_ACTION,
        object
    }
}