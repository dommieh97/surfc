"use client"
import React from "react";
import {Input, ModalContent, ModalHeader, ModalBody, Modal,ModalFooter,Button, useDisclosure} from "@nextui-org/react";
import GenreCards from "./genrecards"
import {useRouter} from "next/navigation";

export default function app()
{
    const router = useRouter();

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [theme, setTheme] = React.useState("")
    const [genres, setGenres] = React.useState([])
    function get() {
            React.useEffect(() => {
              fetch("http://127.0.0.1:5555/genres")
                .then((response) => response.json())
                .then((data) => {
                  const genreArray = Object.values(data)
                  setGenres(genreArray);
                });
            }, []); 
          }
          get()
      function handleGenre() {

        const makePostRequest = async () => {
          const response = await fetch('http://127.0.0.1:5555/genres', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              theme
              
            }),
          });
          if (response.status === 200) {
            console.log('Success!');
            
    
          } else {
            console.log('Oh no!');
          }
        };
        makePostRequest();
      };


      const updateGenre = async () => {
        alert("Genre updated, Goose Bye!");

        router.push("/");
         try {
          const response = await fetch(`http://localhost:5555/genres/${id}` ,{
            method: "PATCH",  
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              "theme": genre.theme,  
              
            }),
          });
         
          if (response.ok) {
            router.push("/");
          }
        } catch (error) {
          console.log(error);
        } 
      };
     
    return(
        <>
    <div >
    {genres.map((genre) => (
          <GenreCards key={genre.id} theme={genre.theme} />
        ))}
    <Input type="text" placeholder=" add genres" onChange={(e)=> setTheme(e.target.value)} />
    <button type="submit" style={{border: "solid"}} onClick={handleGenre}>sumbit</button>
    <br/><br/>
    <Button onPress={onOpen}>edit genres</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <section>
      
     

      <form
        onSubmit={updateGenre}
        
      >
        <label>
          <span >
            Genre
          </span>

          <textarea
            value={theme || ''}
            onChange={(e) => setTheme(e.target.value )}
            placeholder='genre here'
            
    
          />
        </label>
      </form>
    </section>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={updateGenre}>
                  Sumbit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  </div>
  </> 
  )
};

