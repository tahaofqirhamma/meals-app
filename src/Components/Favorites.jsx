import { useContext } from "react";
import { useGlobalContext } from "../Context";

const Favorites = ({}) => {
  const { favoriteMeal } = useGlobalContext();

  return (
    <section className="favorties">
      <div className="favorites-content">
        <div className="favorites-container">
          {favoriteMeal.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <img src={image} className="favorites-img img" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
