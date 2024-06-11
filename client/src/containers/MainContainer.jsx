import React, { useEffect, useState } from "react";
import AllPuppies from "../components/AllPuppies";

const MainContainer = () => {
  const [puppies, setPuppies] = useState([]);
  const [selectedPuppies, setSelectedPuppies] = useState([]);
  const [favouritePuppies, setFavouritePuppies] = useState([]);

  useEffect(() => {
    getPuppies();
  }, []);

  useEffect(() => {
    getBasket().then((basketAll) => {
      selectedFavouritePuppies(basketAll);
    });
  }, []);

  const getPuppies = function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((puppies) => {
        setPuppies(puppies);
        setSelectedPuppies(puppies);
      })
      .catch((err) => console.error(`Loading menu error: ${err}`));
  };

  const onPuppiesSelected = (puppy) => {
    setSelectedPuppies(puppy);
  };

  const handlePuppyClick = (puppy) => {
    setSelectedPuppies(puppy);
  };

  const favouriteSelected = (puppy) => {
    postBasket(puppy).then((res) => {
      const newFavourites = { ...favouritePuppies };
      newFavourites.push(res);
      setFavouritePuppies(newFavourites);
    });
  };

  const handleSearch = (input) => {
    const results = puppies.filter((puppy) => {
      const lowerInput = input.toLowerCase();

      return (
        puppy.name.toLowerCase().includes(lowerInput) ||
        puppy.abv.toString().includes(lowerInput) ||
        puppy.description.toLowerCase().includes(lowerInput) ||
        puppy.first_born.includes(lowerInput)
      );
    });

    setSelectedPuppies(results)
  };

  const handleRemovePuppy = (id) => {
    const filteredPuppies = favouritePuppies.filter((puppy) => puppy._id !== id);
    setFavouritePuppies(filteredPuppies);
  }

  return (
    <>
    <div className="header">
      <div>
        <button className="basket" onClick={() => setBasketIsOpen(!basketIsOpen)}>
          <GrBasket id="gr-basket"/>
        </button>
        {basketIsOpen && (
          <favouritePuppies
          puppies={favouritePuppies}
          handleRemovePuppy={handleRemovePuppy}
          />
        )}
      </div>
    </div>

    <TitleBar puppies={puppies} onPuppiesSelected={onPuppiesSelected} />
    <div className="puppy-container">
      {selectedPuppies ? (selectedPuppies.length ? (
        <AllPuppies
          puppies={selectedPuppies}
          handleButtonClick={handlePuppyClick}
        />
      ) : (
        <PuppyDetail puppy={selectedPuppies} newFavourites={favouriteSelected}/>
      )
      ): null}
    </div>
    
    </>
  );
};

export default MainContainer;
