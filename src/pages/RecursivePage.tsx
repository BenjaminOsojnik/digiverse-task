import React from 'react'
import MusicType from '../controls/MusicType'
import { useSelector } from 'react-redux'
import { TRootReducer } from '../store/reducers'

const RecursivePage = () => {
    const data = useSelector((state:TRootReducer) => state.globalState.data)
    console.log(data)

    return(
            <MusicType parent={data} />
    )
}
export default RecursivePage