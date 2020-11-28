import React from 'react';

import 'materialize-css';
import { Button, Icon, SideNav, SideNavItem } from 'react-materialize';






const SideMenu = () => {

return (
<div style={{ position: 'absolute', zIndex: 1000, top: 0, left: 5 }}>

  <SideNav

    id="SideNav-10"
    options={{
      draggable: true
    }}

    trigger={<Button className=".left-align grey darken-2" icon={<Icon>menu</Icon>}node="button"></Button>}>


    <SideNavItem

      user={{
        background: 'https://images.unsplash.com/photo-1592185161765-2ea880a392b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1716&q=80',
        email: 'mrsteveoconnor@gmail.com',
        image: './images/headshot.jpg',
        name: "Steve O'Connor"
      }}
      userView
    />
    <SideNavItem
      href="/"
      icon={<Icon>home</Icon>}
      className="hoverable"
    >
      Home
    </SideNavItem>
    <SideNavItem
    href="https://github.com/stinkypiece"
    icon={<Icon>collections</Icon>}
    className="hoverable"
    >
      Github
    </SideNavItem>

    <SideNavItem
    href="/projects"
    icon={<Icon>apps</Icon>}
    className="hoverable"
    >
      Projects
    </SideNavItem>

    <SideNavItem
      href="/about"
      icon={<Icon>accessibility</Icon>}
      className="hoverable"
    >
      About Me
    </SideNavItem>
  </SideNav>
</div>
)
}

export default SideMenu;