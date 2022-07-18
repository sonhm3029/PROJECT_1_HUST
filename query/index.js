const queryBase = {
  search: ({ table, field = [], condition="TRUE" }) => {
    field = field?.length > 0 ? field : ["*"];
    fieldQuery = field?.join(",");
    return `SELECT ${fieldQuery} FROM ${table} WHERE ${condition}`;
  },
  create: () => {},
  upadte: () => {},
  delete: () => {},
};

module.exports = queryBase;
