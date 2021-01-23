import React, {Fragment} from 'react'
import MusicType from '../controls/MusicType'
import { useDispatch, useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'
import ObjectEditForm from '../forms/ObjectEditForm'
import {EditSelectedObject} from '../store/actions/globalActionCreator'
import { ImportFromJson} from '../store/reducers/globalReducer'

const RecursivePage = () => {
    const data = useSelector((state:TRootReducer) => state.globalState.data)
    const isEditFormVisible = useSelector((state:TRootReducer) => state.globalState.isEditFormVisible)
    const dispatch = useDispatch()

    const handleFileSelect = (e:any) =>{
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = (e:any) => {
            dispatch(ImportFromJson(JSON.parse(e.target.result)))
        }
     }

    return(
        <Fragment>
            {isEditFormVisible && <ObjectEditForm />}
            <MusicType editable={true} parent={data} />
            {!isEditFormVisible && <button onClick={() =>dispatch(EditSelectedObject({id: 'top', children: []}, true))}>Add genre</button>}
            <br /><label>Add from JSON: </label><input type="file" accept="application/JSON" onChange={handleFileSelect} />
            <br /><a href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`}download="data.json">Download Json</a>
        </Fragment>
    )
}
export default RecursivePage