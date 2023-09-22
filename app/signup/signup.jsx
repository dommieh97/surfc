import React from "react";
import { setCookie,getCookie } from 'cookies-next';
import {Input, Button} from "@nextui-org/react";
import {EyeFilledIcon} from "../components/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../components/EyeSlashFilledIcon";
import {useRouter} from "next/navigation";
export default function SignUp({t}) {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [value, setValue] = React.useState("");
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoggedIn, setisLoggedIn] = React.useState(getCookie("isloggedin"));

    const router = useRouter();
    function handleSignIn(e) {
      e.preventDefault();
      const makePostRequest = async () => {
        const response = await fetch('http://127.0.0.1:5555/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        if (response.status === 200) {
          console.log('Success!');
          
          setCookie("isloggedin", true)
          setisLoggedIn(true)
          router.push("/")
        } else {
          console.log('Oh no!');
        }
      };
      makePostRequest();
    };
 
    
    function handleSignUp(e) {
      e.preventDefault();
  
      const makePostRequest = async () => {
        const response = await fetch('http://127.0.0.1:5555/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
  
        if (response.status === 200) {
          console.log('Success!');
          handleSignIn();
        } else {
          console.log('Oh no!');
        }
      };
  
      makePostRequest();
    }
  
   
  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <Input
      value={value}
      type="username"
      label="Username"
      variant="bordered"
      onValueChange={setValue}
      className="max-w-xs"
      onChange={(e) => setUsername(e.target.value)}

    />
    <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
      onChange={(e) => setPassword(e.target.value)}

    />
    {(t == "Sign Up") ?
    <Button onClick={handleSignUp}>{t}</Button> : <Button onClick={handleSignIn}>{t}</Button>}
    </div>
    </>
  );
}


