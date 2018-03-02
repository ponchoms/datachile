import { combineReducers } from "redux";

const mapParamsInitialState = {
  cuts: {},
  level: "region",
  measure: { value: "" },
  selector: {},
  topic: { value: "" },
  year: 2015
};

const arrayUniqueAdd = (array, item) => {
  array = [].concat(array);
  if (item && !array.includes(item)) array.push(item);
  return array;
};

const mapParamsReducer = (state = mapParamsInitialState, action) => {
  var newState, list, item;

  switch (action.type) {
    case "MAP_CUT_ADD":
      item = action.payload;
      list = state.cuts[item.key] || [];
      return {
        ...state,
        cuts: {
          ...state.cuts,
          [item.key]: arrayUniqueAdd(list, item.member)
        }
      };

    case "MAP_CUT_REMOVE":
      item = action.payload;
      list = state.cuts[item.key] || [];
      return {
        ...state,
        cuts: {
          ...state.cuts,
          [item.key]: list.filter(cut => cut.name != item.name)
        }
      };

    case "MAP_LEVEL_SET":
      return { ...state, level: action.payload };

    case "MAP_MEASURE_SET":
      return {
        ...state,
        measure: action.payload,
        selector: {},
        cuts: {}
      };

    case "MAP_SELECTOR_SET":
      item = action.payload;
      return {
        ...state,
        selector: {
          ...state.selector,
          [item.key]: item.level
        },
        cuts: {
          ...state.cuts,
          [item.key]: []
        }
      };

    case "MAP_TOPIC_SET":
      return {
        ...state,
        topic: action.payload,
        selector: {},
        cuts: {}
      };

    case "MAP_YEAR_SET":
      return { ...state, year: action.payload };

    case "MAP_YEAR_OPTIONS":
      // payload is an array of year strings
      return { ...state, year: [].concat(action.payload).pop() };

    default:
      return state;
  }
};

const mapOptionsInitialState = {
  status: "SUCCESS",
  lastError: null,
  year: [2015],
  cubes: []
};

const mapOptionsReducer = (state = mapOptionsInitialState, action) => {
  switch (action.type) {
    case "MAP_MEMBER_FETCH":
      return { ...state, status: "LOADING", lastError: null };

    case "MAP_MEMBER_SUCCESS":
      const newState = {
        ...state,
        status: "SUCCESS",
        lastError: null,
        cubes: [].concat(state.cubes, action.payload.cube)
      };
      const levels = action.payload.levels;
      for (let level, i = 0; (level = levels[i]); i++) {
        newState[level.name] = level.members.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      return newState;

    case "MAP_MEMBER_ERROR":
      return {
        ...state,
        status: "ERROR",
        lastError: action.payload
      };

    case "MAP_YEAR_OPTIONS":
      return { ...state, year: [].concat(action.payload) };

    default:
      return state;
  }
};

const mapDatasetReducer = (state = [], action) => {
  switch (action.type) {
    case "MAP_SAVE_DATASET":
      return [].concat(state, action.payload);

    case "MAP_DELETE_DATASET":
      return state.filter((item, index) => index !== action.index);

    default:
      return state;
  }
};

const mapResultInitialState = {
  status: "SUCCESS",
  lastError: null,
  data: { region: undefined, comuna: undefined },
  queries: { region: false, comuna: false }
};

const mapResultReducer = (state = mapResultInitialState, action) => {
  switch (action.type) {
    case "MAP_DATA_FETCH":
      return { ...state, status: "LOADING", lastError: null };

    case "MAP_DATA_SUCCESS":
      // this way I make sure the state keeps the shape
      return {
        status: "SUCCESS",
        lastError: null,
        queries: {
          region: action.payload.queryRegion || false,
          comuna: action.payload.queryComuna || false
        },
        data: {
          region: action.payload.dataRegion || undefined,
          comuna: action.payload.dataComuna || undefined
        }
      };

    case "MAP_DATA_ERROR":
      return {
        ...state,
        status: "ERROR",
        lastError: action.payload
      };

    default:
      return state;
  }
};

const mapTitleReducer = (state = "", action) => {
  switch (action.type) {
    case "MAP_SET_TITLE":
      return action.payload;

    default:
      return state;
  }
};

const mapPivotReducer = (state = "cols", action) => {
  switch (action.type) {
    case "MAP_PIVOT_SET":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  datasets: mapDatasetReducer,
  options: mapOptionsReducer,
  params: mapParamsReducer,
  results: mapResultReducer,
  title: mapTitleReducer,
  pivot: mapPivotReducer
});
