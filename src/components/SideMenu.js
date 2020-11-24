import React from 'react';

import 'materialize-css';
import { Button, Icon, SideNav, SideNavItem } from 'react-materialize';






const SideMenu = () => {

return (
<div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}

    trigger={<Button className=".left-align" icon={<Icon>menu</Icon>}node="button"></Button>}>


    <SideNavItem

      user={{
        background: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.industryweek.com%2Ftechnology-and-iiot%2Femerging-technologies%2Farticle%2F21972483%2Fpreparing-for-the-factory-of-the-future&psig=AOvVaw0dQeXj6Fpb-xwo1Nzauv8L&ust=1606336857551000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCuiaGFnO0CFQAAAAAdAAAAABAO',
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