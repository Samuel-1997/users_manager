import React, { useContext } from 'react'
import { contex } from './DataCenter'
import User from './User'


export default function Users()  {
const {users} = useContext(contex)

    return (
        <div className="container">
            <div className="row">
          {users.map((user)=>(
              <User data={user} />
          ))}
          </div>
        </div>
    )
}
