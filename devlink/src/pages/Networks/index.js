import { useState } from 'react'
import './networks.css'
import { Input } from '../../components/input'
import { MdAddLink } from 'react-icons/md'

import { Header } from '../../components/header'

import { db } from '../../services/fireBaseConnection'
import {
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore'

export default function Networks(){
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    async function handleSave(e){
      e.preventDefault();
      
    }


    return(
        <div className="admin-container">
            <Header/>

            <h1 className="title-social">Suas redes sociais</h1>

            <form className="form" onSubmit={handleSave}>
              <label className="label">Link do facebook</label>
              <Input
                placeholder="Digite a url do facebook..."
                value={facebook}
                onChange={ (e) => setFacebook(e.target.value) }
              />

              <label className="label">Link do instagram</label>
              <Input
                placeholder="Digite a url do instagram..."
                value={instagram}
                onChange={ (e) => setInstagram(e.target.value) }
              />  

              <label className="label">Link do youtube</label>
              <Input
                placeholder="Digite a url do youtube..."
                value={youtube}
                onChange={ (e) => setYoutube(e.target.value) }
              />  

              <button type="submit" className="btn-register">
                Salvar links <MdAddLink size={24} color="#FFF" />
              </button>

            </form>

        </div>
    )
}