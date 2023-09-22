"use client"
import React from "react";
import SignUp from "./signup";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from '../components/MailIcon.jsx';
import {LockIcon} from '../components/LockIcon.jsx';

export default function Modality() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [first, setFirst] = React.useState(false);
  const [second, setSecond] = React.useState(true);
  const t = (first == true)? "Sign In" : "Sign Up";
  function toggleFirst() 
  {
    setFirst(!first)
   };
  function toggleSecond()
  {
    setSecond(!second)
  }
  return (
    <>
      <Button onPress={onOpen}  color="primary" variant="bordered">Sign up/Sign In</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        className="modalBox"
      >
        <ModalContent >
          {(onClose ) => (
            <>{ second? (<>
            {first ?  (
              <><ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <SignUp t={t}/>
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                
               
                <br/>
                <Button color="primary"  onPress={toggleFirst}>Close</Button>
              </ModalFooter>
            </>) 
               : ( 
                <>
                <ModalHeader className="flex flex-col gap-1">Welcome</ModalHeader>
                <Button color="primary" onClick={toggleFirst} >
                  Sign in
                </Button>
                <Button color="primary" onClick={toggleSecond} >
                  Sign Up
                </Button></>)}</>) :(
                <div >
                  <ModalHeader className="flex flex-col gap-1" >Sign Up</ModalHeader>
                  <SignUp t={t}/>
                  <br/>
                
                <br/>
                  <Button color="primary" onClick={toggleSecond} >Close</Button>
                   </div>)
               }
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
