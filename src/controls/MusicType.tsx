import React, {Fragment, FunctionComponent} from 'react'
import { TMusic } from '../types/types'

type Props = {
    parent: TMusic
}

const MusicType:FunctionComponent<Props> = ({parent}): any => {
    return (
        <Fragment>
            {parent.title !== undefined && 
                <ul style={{padding: "3px" }}>
                    <li style={{margin: "0px"}}>{parent.title}</li>
                    <ul style={{display:"inline-block"}}>
                        {parent.children !== undefined && parent.children.length > 0 &&
                            parent.children.map(child => (
                                <MusicType parent={child} />
                            ))
                        }
                    </ul>
                    
                </ul>
        }
        
        </Fragment>

    )

}
export default MusicType