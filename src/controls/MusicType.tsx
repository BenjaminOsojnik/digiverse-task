import React, {Fragment, FunctionComponent} from 'react'
import { useDispatch } from 'react-redux'
import { EditSelectedObject } from '../store/actions/globalActionCreator'
import { TMusic } from '../types/types'

type Props = {
    parent: TMusic
}

const MusicType:FunctionComponent<Props> = ({parent}): any => {
    const dispatch = useDispatch()
    return (
        <Fragment>
                <ul style={{padding: "3px" }}>
                    <li onClick={() => dispatch(EditSelectedObject(parent, true))} style={{margin: "0px"}}>{parent.title} {parent.id}</li>
                    <ul style={{display:"inline-block"}}>
                        {parent.children !== undefined && parent.children.length > 0 &&
                            parent.children.map(child => (
                                <MusicType key={child.id} parent={child} />
                            ))
                        }
                    </ul>
                    
                </ul>
        
        </Fragment>

    )

}
export default MusicType