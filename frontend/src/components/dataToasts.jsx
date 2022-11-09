const dataToasts = [
  {
    picture: "./src/assets/MoodVeryGood.png",
    note: "blablabla",
    date: "04/11/2022",
  },
  {
    picture: "./src/assets/MoodGood.png",
    note: "blablabla",
    date: "04/11/2022",
  },
  {
    picture: "./src/assets/MoodNotGoodNotBad.png",
    note: "blablabla",
    date: "04/11/2022",
  },
  {
    picture: "./src/assets/MoodBad.png",
    note: "blablabla",
    date: "04/11/2022",
  },
  {
    picture: "./src/assets/MoodVeryBad.png",
    note: "blablabla",
    date: "04/11/2022",
  },
];

// const loadData = () => {
//   if (!localStorage.getItem("mood")) return;
//   const loadMood = JSON.parse(localStorage.getItem("mood"));
//   dataToasts.unshift(loadMood);
//   console.log(dataToasts);
// };

// // window.addEventListener("load", loadData);

// useEffect(() => {
//   loadData();
// });

export default dataToasts;
