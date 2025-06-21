

import GalleryPage from "@/componente/Galery";
import data from "./data.json";


export default function Home() {
  return (
    
   <main>
      <GalleryPage produits={data} />
   </main>
  );
}
