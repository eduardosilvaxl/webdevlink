import { useState, useEffect } from 'react'
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

import { toast } from 'react-toastify'

export default function Networks(){
    const [youtube, setYoutube] = useState("");
    const [twitter, setTwitter] = useState("");
    const [twitch, setTwitch] = useState("");


    useEffect(() => {
      
      function loadLinks(){
        const docRef = doc(db, "social", "link")
        getDoc(docRef)
        .then((snapshot) => {
          
          if(snapshot.data() !== undefined) {
            setYoutube(snapshot.data().youtube)
            setTwitter(snapshot.data().twitter)
            setTwitch(snapshot.data().twitch)
          }

        })

      }

      loadLinks();

    }, [])


    function handleSave(e){
      e.preventDefault();
      
      setDoc(doc(db, "social", "link"), {
        youtube: youtube,
        twitter: twitter,
        twitch: twitch
      })
      .then(() => {
        console.log("Urls salvas com sucesso!")
        toast.success("Salvo com sucesso!")
      })
      .catch((error) => {
        console.log("ERRO AO SALVAR" + error)
        toast.error("Erro ao salvar seus links!")
      })

    }


    return(
        <div className="admin-container">
            <Header/>

            <h1 className="title-social">Suas redes sociais</h1>

            <form className="form" onSubmit={handleSave}>
              <label className="label">Link do youtube</label>
              <Input
                placeholder="Digite a url do youtube..."
                value={youtube}
                onChange={ (e) => setYoutube(e.target.value) }
              />

              <label className="label">Link do twitter</label>
              <Input
                placeholder="Digite a url do twitter..."
                value={twitter}
                onChange={ (e) => setTwitter(e.target.value) }
              />  

              <label className="label">Link do twitch</label>
              <Input
                placeholder="Digite a url do twitch..."
                value={twitch}
                onChange={ (e) => setTwitch(e.target.value) }
              />  

              <button type="submit" className="btn-register">
                Salvar links <MdAddLink size={24} color="#FFF" />
              </button>

            </form>

        </div>
    )
}