import React, { useState } from 'react'
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap'
//importar LINK 


const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
  setOpen(!open)
}
return (
     <Navbar color='light' light expand='md'>
        <NavbarBrand>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar> 
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/'>Gêneros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> 
  )
}

export default Header