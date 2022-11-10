import { useState, useEffect } from 'react'

import { auth } from '../services/fireBaseConnection'
import { onAuthStateChanged } from 'firebase/auth'

import { Navigate } from "react-router-dom"

export default function Private({ children }){
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        
        console.log("COMPONENTE FOI CARREGADO")
    
    }, [])


    if(loading){
        return(
            <div></div>
      )
    }

    if(!signed){
        return <Navigate to="/login" />
    }

    return children;
}
