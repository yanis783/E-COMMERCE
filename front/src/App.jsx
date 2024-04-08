import Header from "./composants/commun/Header";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Shop from "./composants/pages/Shop";
import Categorie from "./composants/pages/Categorie";
import Produit from "./composants/pages/Produit";
import Panier from "./composants/pages/Panier";
import Connexion from "./composants/pages/Connexion";
import Footer from "./composants/commun/Footer";
import men_banniere from "../../front/src/assets/banniere-men.png"
import kid_banniere from "../../front/src/assets/banniere-men.png"
import accessoire_banniere from "../../front/src/assets/banniere-men.png"
import Admin from "./composants/Admin/admin";

function App (){
  return <div>


{/* mise en lien des differentes pages */}
    <Header />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/hommes" element={<Categorie banner={men_banniere} category="men"/>}/>
        <Route path="/enfants" element={<Categorie banner={men_banniere}  category="kid"/>}/>
        <Route path="/accessoires" element={<Categorie banner={men_banniere}  category="Accessoires" />}/>
        <Route path="/produit" element={<Produit/>}/>
        <Route path="/produit/:produitId" element={<Produit/>}/>

        <Route path="/panier" element={<Panier/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
        {/* <Route path="/admin" element={<Admin/>}/> */}

      </Routes>
      <Footer/>

  </div>
}
export default App; 