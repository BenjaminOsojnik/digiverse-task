import React, {Fragment} from 'react'
import MusicType from '../controls/MusicType'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import ObjectEditForm from '../forms/ObjectEditForm'
import {EditSelectedObject} from '../store/actions/globalActionCreator'

const RecursivePage = () => {
    const data = useSelector((state:TRootReducer) => state.globalState.data)
    const isEditFormVisible = useSelector((state:TRootReducer) => state.globalState.isEditFormVisible)
    const dispatch = useDispatch()
    return(
        <Fragment>
            {isEditFormVisible && <ObjectEditForm />}
            <MusicType editable={true} parent={data} />
            {!isEditFormVisible && <button onClick={() =>dispatch(EditSelectedObject({id: 'top', children: []}, true))}>Add genre</button>}
        </Fragment>
    )
}
export default RecursivePage