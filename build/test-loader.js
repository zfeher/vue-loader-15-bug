module.exports = function loader(content) {
  console.log(content);
  process.exit(1);
  return null;
};
