const handleBarsHelper = {
  sum: (a, b) => {
    return a + b;
  },
  JSONparse: (value) => JSON.stringify(value),
  combineString: (...args) => {
    return `${args?.slice(0, args?.length-1).join("")}`;
  },
};

module.exports = handleBarsHelper;
