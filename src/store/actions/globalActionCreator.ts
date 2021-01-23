import { TMusic } from "../../types/types"
import { SetEditFormVisibility, SetEditSelectedObject } from "../reducers/globalReducer"

export const EditSelectedObject = (object: TMusic, visible:boolean): any => {
    return async (dispatch: any) => {
        if (visible === true)
            await dispatch(SetEditFormVisibility(!visible))
        await dispatch(SetEditSelectedObject(object))
            await dispatch(SetEditFormVisibility(visible))
    }
}
