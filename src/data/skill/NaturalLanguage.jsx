const naturalLanguage = {
  "Japanese - native": 5,
  "English - IELTS7.0": 4,
};

if (Object.keys(naturalLanguage).length % 2 != 0) {
  throw Error("The number of naturalLanguage is not even ");
}

export default naturalLanguage;
