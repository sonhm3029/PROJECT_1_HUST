const members = {
  membersStatus: (status) => {
    switch (status) {
      case 1:
        return "Đang hoạt động";
      case 2:
        return "Rời lab";
      case 3:
        return "Đã tốt nghiệp";
      default:
        return "Không xác định";
    }
  },
  studyFields: (arr) => {
    return arr
      ?.map((field) => {
        switch (field) {
          case 1:
            return "Ai - Machine Learning";
          case 2:
            return "FPGA";
          case 3:
            return "Thiết kế số";
          default:
            return "";
        }
      })
      ?.join(", ");
  },
  role: (value) => {
    switch(value){
        case '1':
            return "Sinh viên";
        case '2':
            return "Giảng viên";
        default:
            return value;
    };
  },
  joinInDate: (value) => {
    return new Date(value).toLocaleDateString();
  }
};

const studyFields = [
  {
    label:"Ai - Machine Learning",
    value:1
  },
  {
    label:"FPGA",
    value:2
  },
  {
    label:"Thiết kế số",
    value:3
  },
  {
    label:"Khác",
    value:4
  }
]

module.exports = {
    members,
    studyFields
};
