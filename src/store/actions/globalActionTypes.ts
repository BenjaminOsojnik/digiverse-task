export const SET_EDIT_FORM_VISIBILITY = 'SET_BUCKET_LIST_ACTION'


interface SetEditFormVisibility {
    type: typeof SET_EDIT_FORM_VISIBILITY,
    visible: boolean
}

export type globalActionTypes =
    SetEditFormVisibility
