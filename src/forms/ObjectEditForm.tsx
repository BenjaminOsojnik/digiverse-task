import React, {Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyObject } from '../constants/emptyObject'
import generateGuidG4 from '../functions/generateGuidG4'
import { TRootReducer } from '../store/reducers'
import { updateSelectedObject, UpdateObject, deletedObject } from '../store/reducers/globalReducer'
import {EditSelectedObject} from '../store/actions/globalActionCreator'
import { TMusic } from '../types/types'
import MusicType from '../controls/MusicType'

const ObjectEditForm = () => {
    const object = useSelector((state:TRootReducer)=> state.globalState.selectedObject)
    const title = useSelector((state:TRootReducer) => state.globalState.selectedObject.title)
    const data = useSelector((state:TRootReducer) => state.globalState.data)
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
                dispatch(EditSelectedObject(object, true))
                
            }
        }
    }
    
    const deleteNestedArray = (parent: TMusic, deleteObject: TMusic) => {
        let tempData = parent
        tempData.children.forEach(child => {
            if (child.id === deleteObject.id){
                console.log(true)
                let b:TMusic = {id: tempData.id, title: tempData.title, children: tempData.children.filter(ch => ch.id !== deleteObject.id)}
                dispatch(deletedObject(b))
            }
            else {
                deleteNestedArray(child, deleteObject)
            }

        })
    }

    const handleDelete = () => {
        deleteNestedArray(data, object)
    }

    const handleUpdate = () => {
        if (object.title !== '')
            dispatch(UpdateObject(object))
        else
            console.error('title cannot be empty')
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
            {object.title !== '' && <Fragment><label>Preview</label><MusicType editable={false} parent={object} /></Fragment>}
            <button onClick={()=> handleAddChild()}>Add Subgenre</button><br />
            {object.id !== 'top' ? (
                <Fragment>
                    <button onClick={() => handleUpdate()}>Update Genre</button>
                    <button onClick={() => handleDelete()}>Delete Genre</button>
                </Fragment>) 
                : 
                <button onClick={() => dispatch(UpdateObject(object))}>Add Genre</button>
            }
            <button onClick={()=> dispatch(EditSelectedObject(emptyObject, false))}>Close</button>
            
        </div>

    )
}

export default ObjectEditForm