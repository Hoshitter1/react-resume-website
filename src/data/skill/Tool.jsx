const tool = {
  Pycharm: 4,
  "Visual Studio": 3,
  "X-code": 2,
  Postman: 3,
  Git: 4,
  Docker: 4,
  "Unix-like OS": 4,
  "CI/CD": 2,
};

if (Object.keys(tool).length % 2 != 0) {
  throw Error("The number of tool is not even ");
}

export default tool;
