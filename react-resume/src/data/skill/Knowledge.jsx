const knowledge = {
  Statistics: 4,
  Accounting: 3,
  SEO: 3,
  "Machine Leaning": 4,
  "Web Design": 3,
  "Electrical Engineering": 3,
};

if (Object.keys(knowledge).length % 2 != 0) {
  throw Error("The number of knowledge is not even ");
}

export default knowledge;
