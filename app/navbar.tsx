'use client'
import React from "react";
import { getCookie, setCookie } from 'cookies-next';

import {Navbar, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

export default function NavBart() {
  const [isLoggedIn, setisLoggedIn] = React.useState(getCookie("isloggedin"));

  const handleLogOff = async () => {
    const response = await fetch('http://127.0.0.1:5555/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.status === 200) {
      console.log('Success!');
    } else {
      console.log('Oh no!');
    }

    setisLoggedIn(false);
    setCookie("isloggedin", false);
    console.log("Success!!!")
  };

  return (
    
    <div className="sfc">
    <Navbar >
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" style={{color: "white"}} href="/">
           <strong> Home </strong>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/channels" aria-current="page" style={{color: "white"}}>
          <strong> Channels </strong>
          </Link> 
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" style={{color: "white"}} href="genres">
          <strong> Genres </strong>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
            {isLoggedIn? (
               <Dropdown placement="bottom-end">
<DropdownTrigger >
            <Avatar
              isBordered
              as="button"
              className="w-6 h-6 text-tiny"              
              color="secondary"
              name="Dommie"
              size="sm"
              src="/Images/goblin.png"
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">Dommie</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogOff} >
                Log Out
              </DropdownItem>
            </DropdownMenu>
            </Dropdown>):(
            <Dropdown placement="bottom-end">
            <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="w-6 h-6 text-tiny"              
              color="secondary"
              name="Guest"
              size="sm"
              src="/Images/wave.png"
            />
          </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Guest</p>
              </DropdownItem>
              <DropdownItem key="sign in" ><Link href="/signup">
              Sign in<br/>Sign Up</Link>
              </DropdownItem>
            
</DropdownMenu>
</Dropdown>
            )}
        
      </NavbarContent>
    </Navbar>
    </div>
   
    
  );
}