import React, {useContext} from 'react'
import {contex} from './DataCenter'


export default function User(props) {
    const {movies} = useContext(contex)

    return (

        <div className="col-3">
        <div className="card" style={{width: '18rem'}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.data.id}</li>
            <li className="list-group-item">{props.data.name}</li>
            <li className="list-group-item">{props.data.username}</li>
            <li className="list-group-item">{props.data.email}</li>
            <li className="list-group-item">
            <button className="btn btn-danger" onClick={()=>movies(props.data.id)}>Supprimer</button>
            </li>
        </ul>
        </div>
        </div>

    )
}
