

import GalleryPage from "@/componente/Galery";
import data from "./data.json";
import Hero from "@/componente/Hero";
import About from "@/componente/About";
import Contact from "@/componente/Contact";





export default function Home() {
  return (

    
    
   <main>
    <Hero/>
    <About/>
    
      <GalleryPage produits={data} />
      
      <Contact/>
      
      
      
   </main>
  );
}
