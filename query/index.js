const queryBase = function (table) {
  return {
    search: ({ field = [], condition = "TRUE" }) => {
      field = field?.length > 0 ? field : ["*"];
      fieldQuery = field?.join(",");
      return `SELECT ${fieldQuery} FROM ${table} WHERE ${condition}`;
    },
    create: () => {},
    upadte: () => {},
    delete: () => {},
    count: ({ field = [], condition = "TRUE" }) => {
      field = field?.length > 0 ? field : ["*"];
      fieldQuery = field?.join(",");
      return `SELECT COUNT(${fieldQuery}) AS Total FROM ${table} WHERE ${condition}`;
    },
  };
};

module.exports = queryBase;
