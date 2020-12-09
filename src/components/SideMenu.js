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

    <div >
      <SideNavItem>
        <img
        src="./images/headshot.jpg"
        alt="headshot"
        style={{ width: '120%', height: 'auto'}}
        />
      </SideNavItem>
    </div>
    <div style={{ marginTop: '100%'}}>
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
    </div>
  </SideNav>
</div>
)
}

export default SideMenu;