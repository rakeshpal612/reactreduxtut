import Chance from "chance";

const chance = new Chance();

export const fakeUserData = () => {
  //   console.log(chance.name({ middle: true }));
  let daata = chance.name({ middle: true });
  return daata;
};

// fakeUserData();
