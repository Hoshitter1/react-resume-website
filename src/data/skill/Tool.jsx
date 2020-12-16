const tool = {
  Pycharm: 4,
  VSCode: 4,
  Atom: 4,
  Xcode: 2,
  Postman: 3,
  WebPack: 3,
  Git: 4,
  Docker: 4,
  MacOS: 4,
  Linux: 4,
};

if (Object.keys(tool).length % 2 != 0) {
  throw Error("The number of tool is not even ");
}

export default tool;
