import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from './img/logo_ufopa_inicio-removebg-preview.png'
import './style.css'


const Header = (props) => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>

      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}

      <div className='principal'>
        <div className='img_ufopa'>
          <img src={logo} alt="" />
        </div>
        <div className='container-texto'>
          <h1>Acervo Ufopa</h1>
        </div>
      </div>
        
      

    </Container>
  )
}

export default Header