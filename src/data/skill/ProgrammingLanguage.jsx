const programmingLanguages = {
  Python: 4,
  HTML: 4,
  CSS: 4,
  JavaScript: 4,
  TypeScript: 2,
  "C++": 2,
  SwiftUI: 2,
  SQL: 2,
};

if (Object.keys(programmingLanguages).length % 2 != 0) {
  throw Error("The number of programmingLanguages is not even ");
}

export default programmingLanguages;
