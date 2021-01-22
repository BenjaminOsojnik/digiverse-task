import { TMusic } from "../../types/types"

export const SET_EDIT_FORM_VISIBILITY_ACTION = 'SET_EDIT_FORM_VISIBILITY_ACTION'
export const SET_EDIT_SELECTED_OBJECT_ACTION = 'SET_EDIT_SELECTED_OBJECT_ACTION'
export const UPDATE_OBJECT_ACTION = 'UPDATE_OBJECT_ACTION'
export const UPDATE_SELECTED_OBJECT_ACTION = 'UPDATE_SELECTED_OBJECT_ACTION'


interface SetEditFormVisibilityAction {
    type: typeof SET_EDIT_FORM_VISIBILITY_ACTION,
    visible: boolean
}

interface SetEditSelectedObjectAction {
    type: typeof SET_EDIT_SELECTED_OBJECT_ACTION
    object: TMusic
}

interface UpdateObjectAction {
    type: typeof UPDATE_OBJECT_ACTION,
    object: TMusic

}

interface UpdateSelectedObjectAction {
    type: typeof UPDATE_SELECTED_OBJECT_ACTION,
    object: TMusic
}



export type globalActionTypes =
    SetEditFormVisibilityAction
    |   SetEditSelectedObjectAction
    |   UpdateObjectAction
    |   UpdateSelectedObjectAction