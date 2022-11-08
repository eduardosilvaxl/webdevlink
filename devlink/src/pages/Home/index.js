import './home.css'

import { Social } from '../../components/Social'

import { FaYoutube, FaTwitter, FaTwitch} from 'react-icons/fa'

export default function Home(){
    return(
    <div className="home-container">
       <h1>Eduardo Silvaxl</h1>
       <span>Veja meus links 👇</span>

      <main className="links">
      <section className="link-area">
        <a href="#">
          <p className="link-text">Canal no Youtube</p>
        </a>
       </section>

       <section className="link-area">
        <a href="#">
          <p className="link-text">Canal na Twitch</p>
        </a>
       </section>

       <section className="link-area">
        <a href="#">
          <p className="link-text">Grupo no Telegram</p>
        </a>
       </section>

       <footer>
          
          <Social url="https://youtube.com/@eduardosilvaxl">
            <FaYoutube size="35" color="#FFF" />
          </Social>

          <Social url="https://twitter.com/eduardo_silvaxl">
            <FaTwitter size="35" color="#FFF" />
          </Social>

          <Social url="https://www.twitch.tv/urubeljoga">
            <FaTwitch size="35" color="#FFF" />
          </Social>

       </footer>

      </main>
    </div>
  )
}