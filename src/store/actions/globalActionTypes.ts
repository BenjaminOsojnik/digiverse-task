import { TMusic } from "../../types/types"

export const SET_EDIT_FORM_VISIBILITY_ACTION = 'SET_EDIT_FORM_VISIBILITY_ACTION'
export const SET_EDIT_SELECTED_OBJECT_ACTION = 'SET_EDIT_SELECTED_OBJECT_ACTION'
export const UPDATE_OBJECT_ACTION = 'UPDATE_OBJECT_ACTION'
export const UPDATE_SELECTED_OBJECT_ACTION = 'UPDATE_SELECTED_OBJECT_ACTION'
export const DELETE_OBJECT_ACTION = 'DELETE_OBJECT_ACTION'
export const IMPORT_FROM_JSON_ACTION = 'IMPORT_FROM_JSON_ACTION'


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

interface DeleteObjectAction {
    type: typeof DELETE_OBJECT_ACTION,
    object: TMusic
}

interface ImportFromJSONAction {
    type: typeof IMPORT_FROM_JSON_ACTION,
    data: TMusic
}



export type globalActionTypes =
    SetEditFormVisibilityAction
    |   SetEditSelectedObjectAction
    |   UpdateObjectAction
    |   UpdateSelectedObjectAction
    |   DeleteObjectAction
    |   ImportFromJSONAction