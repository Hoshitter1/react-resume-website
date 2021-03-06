const cloudService = {
  "AWS - Lambda": 4,
  "AWS - EC2": 3,
  "AWS - SageMaker": 4,
  Heroku: 3,
  "AWS - S3": 4,
  "AWS - Comprehend": 4,
  "AWS - VPC": 3,
  "AWS - Glue": 4,
  "AWS - Athana": 3,
  "AWS - QuickSight": 3,
  "GCP - gpu instance": 3,
  Netlify: 4,
};

if (Object.keys(cloudService).length % 2 != 0) {
  throw Error("The number of cloudService is not even ");
}

export default cloudService;
