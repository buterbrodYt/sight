const initialState = {
  category: "",
  sortBy: "",
  order: "asc",
  title: "",
  limit: 9,
  page: 1,
};

export default function queryParams(state = initialState, action) {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
        page: 1,
      };
    case "SET_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "SET_SEARCH":
      return {
        ...state,
        title: action.payload,
        page: 1,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      break;
  }
  return state;
}
