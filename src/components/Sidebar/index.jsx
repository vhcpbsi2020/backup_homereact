import React from 'react'
import { Container, Content, Teste } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
  FaCcPaypal,
  FaReply,

} from 'react-icons/fa'


import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Teste>
          <h1>Menu</h1>
        </Teste>
        <SidebarItem Icon={FaHome} Text="Pagina Inicial" />
        <SidebarItem Icon={FaChartBar} Text="Cadastrar novo item" />
        <SidebarItem Icon={FaUserAlt} Text="Minha conta" />
        <SidebarItem Icon={FaEnvelope} Text="Sitios Arquiologicos" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Agendamentos de Visitas" />
        <SidebarItem Icon={FaIdCardAlt} Text="Usuarios cadastrados" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaRegSun} Text="Configurações" />
        <SidebarItem Icon={FaReply} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar