import React, {useContext} from 'react'
import { contex } from '../DataCenter'

export default function Post(props) {
    const {winer}=useContext(contex)
    return (

        <div className="col-3">
            <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header">{props.data.id}</div>
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.body}</p>
                <button onClick={()=>winer(props.data.id)} className="btn btn-danger" >Supprimer Ici</button>
            </div>
            </div>
        </div>

    )
}
