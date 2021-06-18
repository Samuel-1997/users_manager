import React, {useContext} from 'react'
import { contex } from '../DataCenter'
import Post from './Post'

export default function Posts() {
    const {posts} = useContext(contex)
    return (

            <div className="container">
                <div className="row">
                {posts.map((post)=>(
                    <Post data={post} />
                ))}
                </div>
            </div>
    )
}
