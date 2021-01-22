import React, {Fragment} from 'react'
import MusicType from '../controls/MusicType'
import { useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import ObjectEditForm from '../forms/ObjectEditForm'

const RecursivePage = () => {
    const data = useSelector((state:TRootReducer) => state.globalState.data)
    const isEditFormVisible = useSelector((state:TRootReducer) => state.globalState.isEditFormVisible)

    return(
        <Fragment>
            {isEditFormVisible && <ObjectEditForm />}
            <MusicType parent={data} />
        </Fragment>
    )
}
export default RecursivePage