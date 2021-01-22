import React from 'react'
import {TMusic} from '../types/types'
import MusicType from '../controls/MusicType'

const RecursivePage = () => {
    const data:TMusic = {
            title:'',
            children: [
                {
                    title: "Country",
                    children: []
                },
        
                {
                    title: "Rock",
                    children: [
                        {
                            title: "Classic Rock",
                            children: []
                        },
                        {
                            title: "Alternative",
                            children: []
                        },
                        {
                            title: "Grunge",
                            children: []
                        }
                    ]
                },
                {
                    title: "Electronic Music",
                    children: [
                        {
        
                            title: "Ambient",
                            children: []
                        },
                        {
                            title: "Techno",
                            children: []
                        },
                        {
                            title: "Jungle",
                            children: []
                        },
                        {
                            title: "Industrial",
                            children: []
                        },
                        {
                            title: "Drum and bass",
                            children: []
                        },
                        {
                            title: "House",
                            children: []
        
                        }
        
                    ]
        
                }
        
            ]
        
        }   

    return(
            <MusicType parent={data} />
    )
}
export default RecursivePage