import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();

const allMeamURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeamURL = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favoriteMeal, setFavoriteMeal] = useState([
    {
      idMeal: "52977",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    },
  ]);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (e) {
      console.log(e.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(allMeamURL);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchData(`${allMeamURL}${searchTerm}`);
  }, [searchTerm]);

  const fetchRandomMeal = () => {
    fetchData(randomMeamURL);
  };

  const selectMeal = (idMeal) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal);
    setSelectedMeal(meal);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favoriteMeal.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updatedFavorites = [...favoriteMeal, meal];
    setFavoriteMeal(updatedFavorites);
  };

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        isFavorite,

        showModal,
        selectedMeal,
        favoriteMeal,
        setSearchTerm,
        fetchRandomMeal,
        selectMeal,
        closeModal,
        addToFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };

export const useGlobalContext = () => useContext(AppContext);

// function Container(children) {
//     return <div className="container mx-auto">
//         {children}
//     </div>
// }
