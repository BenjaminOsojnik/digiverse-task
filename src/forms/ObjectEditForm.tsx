import React, {Fragment, useState} from 'react'
import { useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'

const ObjectEditForm = () => {
    const [object, setObject] = useState(useSelector((state:TRootReducer) => state.globalState.selectedObject))
    const [isAddSubGenreVisible, setAddGenreVisible] = useState(false)
    const handleTitleChange = (title:string) => {

    }
    
    return (
        <form>
            <label>Title</label>
            <input name={"title"} value={object.title || ''} onChange={(e) => handleTitleChange(e.target.value)} /><br />
            <button onClick={()=> setAddGenreVisible(true)}>Add subgenes</button>
            {isAddSubGenreVisible &&
                <Fragment>
                    <label>Title</label>
                </Fragment>
            }
        </form>

    )
}
export default ObjectEditForm