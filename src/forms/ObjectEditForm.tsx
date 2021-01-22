import React, {Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyObject } from '../constants/emptyObject'
import generateGuidG4 from '../functions/generateGuidG4'
import { TRootReducer } from '../store/reducers'
import { updateSelectedObject, UpdateObject } from '../store/reducers/globalReducer'
import {EditSelectedObject} from '../store/actions/globalActionCreator'
import { TMusic } from '../types/types'

const ObjectEditForm = () => {
    const object = useSelector((state:TRootReducer)=> state.globalState.selectedObject)
    const title = useSelector((state:TRootReducer) => state.globalState.selectedObject.title)
    const [isAddSubGenreVisible, setAddGenreVisible] = useState(false)
    const [childTitle, setChildTitle] = useState('')
    const dispatch = useDispatch()
    
    const handleTitleChange = (title:string) => {
        let objectTemp = object
        objectTemp.title = title
        dispatch(updateSelectedObject(objectTemp))
    }

    const handleAddChild = () => {
        if (!isAddSubGenreVisible){
            setAddGenreVisible(true)
        }
        else {
            if (childTitle !== ''){
                let tempChild:TMusic = {
                    id: generateGuidG4(),
                    title: childTitle,
                    children: []
                }
                let tempObject = object
                tempObject.children.push(tempChild)
                dispatch(EditSelectedObject(emptyObject, false))
                
            }
        }
    }


    
    return (
        <div>
            <label>Title</label><br />
            <textarea name={"title"} value={title} onChange={(e) => handleTitleChange(e.target.value)} /><br />
            
            {isAddSubGenreVisible &&
                <Fragment>
                    <label>Title</label><br />
                    <input name={"child-title"} value={childTitle} onChange={(e) => setChildTitle(e.target.value)} /> <br />
                </Fragment>
            }
            <button onClick={()=> handleAddChild()}>Add subgenes</button>

            <button onClick={() => dispatch(UpdateObject(object))}>Update object</button>
        </div>

    )
}
export default ObjectEditForm