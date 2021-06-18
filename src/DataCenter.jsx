import React, {createContext, useEffect, useState} from 'react'
import axios from "axios"

export const  contex=createContext()

export default function DataCenter(props) {

//Déclaration du state Users
    const [users, setusers] = useState([])

//Déclaration du state Posts
    const [posts, setposts] =  useState([])


//Fonction pour remplir le state puis afficher Users
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>setusers(res.data))
    }, [])


//Fonction du bouton pour supprimer Users
    function movies(id) {
        const delet=users.filter(user=>user.id!=id)
        setusers(delet)
    }

//Fonction d'intermédière pour remplir le formulaire Users
        function complete(user)
        { 
            axios.post('https://jsonplaceholder.typicode.com/users', user)
              .then(res=>{
                  setusers([res.data,...users])
              })       
        }


    
//Fonction pour remplir le state puis afficher Posts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setposts(res.data))
    }, [])
    
//Fonction du bouton pour supprimer Posts 
 function winer(id){
     const result=posts.filter(post=>post.id!=id)
     setposts(result)
 }   
    
//Fonction d'intermédière pour remplir le formulaire Posts
function ajoute(post) {
    axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then(res=>{
        setposts([res.data,...posts])
    })
}
    
    return (
        <div>

        <contex.Provider value={{users, movies, complete, posts, winer, ajoute}}>
            {props.children}
        </contex.Provider>
            
        </div>
    )
}
