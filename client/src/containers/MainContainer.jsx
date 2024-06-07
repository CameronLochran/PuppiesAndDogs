import React, { useEffect, useState } from "react";

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

  return (
    <>
      <h1>Puppies</h1>
    </>
  );
};

export default MainContainer;
