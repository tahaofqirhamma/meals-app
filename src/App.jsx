import Favorites from "./Components/Favorites";
import Search from "./Components/Search";
import Modal from "./Components/Modal";
import Meals from "./Components/Meals";

import "./App.css";
import { useGlobalContext } from "./Context";

function App() {
  const { showModal, isFavorite, favoriteMeal } = useGlobalContext();
  console.log(favoriteMeal);
  return (
    <main>
      <Search />
      {favoriteMeal.length && <Favorites meals={favoriteMeal} />}

      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
