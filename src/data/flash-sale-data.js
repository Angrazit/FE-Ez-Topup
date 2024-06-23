import gameData from "./game-data";
import topUpData from "./top-up-data";

// Create a function to get the corresponding game for each top-up data entry
const getGameForTopUp = (gameId) => {
  return gameData.find(game => game.id === gameId);
};

// Generate flashSaleData array
export const flashSaleData = topUpData
  .filter(data => data.isDiscount === true) // Filter out entries where isDiscount is false
  .map(data => {
    const game = getGameForTopUp(data.gameId);
    return {
      id: data.id,
      name: game.name,
      img: game.img,
      url: game.url,
      discount: data.discount,
      nominal: data.name,
    };
  });

export default flashSaleData;


// import gameData from "./game-data";
// import topUpData from "./top-up-data";

// const data = topUpData.find(prep => prep.isDiscount === false)
// const game = gameData.find(prep1 => prep1.id === data.gameId)


// export const flashSaleData = [
//   {
//     img: "/img/1.jpg",
//     name: "Mobile legends",
//     nominal: "Moonton",
    
//   },

  
// ];

// export default flashSaleData;
