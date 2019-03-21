import React from 'react';
import '../styles/Sidebar.scss';
import { FiSearch, FiRadio } from 'react-icons/fi';
import { FaShoppingBag, FaUserCircle, FaHome } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <Button label="Busca"           icon={<FiSearch />}/>
        <Button label="Início"          icon={<FaHome />}/>
        <Button label="Agora na Globo"  icon={<FiRadio />}/>
        <Button label="Categorias"      icon={<FaShoppingBag />}/>
        <Button label="Minha conta"     icon={<FaUserCircle />}/>
      </ul>
    </aside>
  )
}

const Button = ({ label, icon }) => {
  return (
    <li>
      
      <button>
        {icon || null}
        <span>{label}</span>
      </button>
    </li>
  )
}

export default Sidebar