import { NavBar } from "./(components)/NavBar";
import { HomePage } from "./(components)/HomePage";
import { Gallery } from "./(components)/Gallery";
import { About } from "./(components)/About";
import { Contact } from "./(components)/Contact";

 
export default function Home() {
  return (
      
      <div>
       <NavBar /> 
       <HomePage />
       <Gallery />
       <About />
       <Contact />
      </div>


  )
}
