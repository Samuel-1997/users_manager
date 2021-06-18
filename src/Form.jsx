import React, {  useContext, useState} from 'react'
import {contex} from './DataCenter'

export default function Form() {

//Déclaration du state du formulaire
    const [user, setuser] = useState({})

//Déclaration du Fonction d'intermédière pour le formulaire
    const {complete}=useContext(contex)
    
//Fonction pour remplir le state du formulaire
    function handelChange(e)
    {     setuser({
        ...user,
        [e.target.name]:e.target.value
    })
    }


    return (

        <div className="form-group col-md-4 offset-3 mt-5">
            <h1 className="text-secondary">ajouter un utilisateur </h1>
            <input name='name'  onChange={handelChange} type="text" placeholder="Entrer votre Nom" className='form-control mt-2' />
            <input name='username'  onChange={handelChange} type="text" placeholder="Entrer votre pseudo" className='form-control mt-2' />
            <input name='email' onChange={handelChange} type="text" placeholder="Entrer votre Email" className='form-control mt-2' />
            <button onClick={()=> complete(user)} className='btn btn-success form-control mt-2'>add</button>
        </div>
    )
}
