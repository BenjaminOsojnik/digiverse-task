import React, {Fragment, FunctionComponent} from 'react'
import { useDispatch } from 'react-redux'
import { EditSelectedObject } from '../store/actions/globalActionCreator'
import { TMusic } from '../types/types'

type Props = {
    parent: TMusic,
    editable: boolean
}

const MusicType:FunctionComponent<Props> = ({parent, editable}): any => {
    const dispatch = useDispatch()

    const handleEdit = () => {
    
        if (editable === true)
            dispatch(EditSelectedObject(parent, true))
        
    }

    return (
        <Fragment>
                <ul style={{padding: "3px" }}>
                    <li onClick={() => handleEdit()} style={{margin: "0px"}}>{parent.title}</li>
                    <ul style={{display:"inline-block"}}>
                        {parent.children !== undefined && parent.children.length > 0 &&
                            parent.children.map(child => (
                                <MusicType editable={editable} key={child.id} parent={child} />
                            ))
                        }
                    </ul>
                    
                </ul>
        
        </Fragment>

    )

}
export default MusicType