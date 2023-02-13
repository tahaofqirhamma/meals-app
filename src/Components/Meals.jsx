import { useGlobalContext } from "../Context";
import { BiLike } from "react-icons/bi";
import { useContext } from 'react'

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext(); 
  if(loading) {
    return <section className="section">
      <h4>Loading...</h4>
    </section>
  }
  if(meals.length < 1){
    return <section className="section">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }
  return (  
    <section className="section-center">
      {meals.map((singleMeal) => {
       const {idMeal, strMeal:titel, strMealThumb:image} = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              style={{ width: "100% !important" }}
              className="img"
              onClick={() => {
                selectMeal(idMeal);
              }}
            />
            <footer>
              <h5>{titel}</h5>
              <button className="like-btn" onClick={() => {addToFavorites(idMeal)}}>
                <BiLike />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals