const framework = {
  Django: 4,
  Flask: 3,
  TensorFlow: 3,
  Pytorch: 3,
  React: 4,
  Bootstrap: 3,
  PyQt: 3,
  Angular: 2,
};

if (Object.keys(framework).length % 2 != 0) {
  throw Error("The number of framework is not even ");
}

export default framework;
