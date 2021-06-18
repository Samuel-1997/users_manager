import React, {useContext, useState} from 'react'
import { contex } from '../DataCenter'

export default function FormPosts() {
    const {ajoute} = useContext(contex)
    const [post, setpost] = useState({})

    function changer(e) {
        setpost({
            ...post,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
             <div className="form-group col-md-4 offset-3 mt-5">
            <h1 className="text-secondary">ajouter un Posts </h1>
            <input name='id'  onChange={changer} type="text" placeholder="Entrer votre id" className='form-control mt-2' />
            <input name='title'  onChange={changer} type="text" placeholder="Entrer votre titre" className='form-control mt-2' />
            <input name='body' onChange={changer} type="text" placeholder="Entrer le contenue" className='form-control mt-2' />
            <button onClick={()=> ajoute(post)} className='btn btn-success form-control mt-2'>add</button>
        </div>
        </div>
    )
}
