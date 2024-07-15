import gameData from "./game-data";

// Generate flashSaleData array
export const populerData = gameData
  .filter(data => data.isPopuler === true) // Filter out entries where isDiscount is false
  .map(data => {
    return {
      id: data.id,
      name: data.name,
      url: data.url,
      developer: data.developer,
      img: data.gambar[0].popular,
      desc: data.desc,
      };
  });

export default populerData;


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
