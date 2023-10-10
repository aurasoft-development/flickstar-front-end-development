import React, { useState } from 'react'
import Header from '../component/header.nav/header';
import Nav from '../component/header.nav/nav'

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>

      <Header onOpenNav={() => setOpen(true)} />
      : <Nav openNav={open} onCloseNav={() => setOpen(false)} />

    </div>
  )
}

export default HeaderNav