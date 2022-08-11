const BucketParams = function ({ ...params }) {
  return {
    Bucket: process.env.AWS_BUCKET_NAME,
    ...params,
  };
};

module.exports = {
    BucketParams
}
