const framework = {
  Django: 4,
  "TensorFlow/Pytorch": 3,
  React: 2,
  Bootstrap: 3,
  PyQt: 4,
  Angular: 4,
};

if (Object.keys(framework).length % 2 != 0) {
  throw Error("The number of framework is not even ");
}

export default framework;
