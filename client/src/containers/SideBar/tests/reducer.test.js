import produce from "immer";
import categoriesReducer from "../reducer";
import { fetchCategories, fetchCategoriesSuccess } from "../actions";
import { categoriesMocks }  from "./mocks/categoriesMocks";

describe("Categories Reducer test", () => {
  let state;
  beforeEach(() => {
    state = {
      loading: true,
      error: false,
      list: [],
    };
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(categoriesReducer(state, {})).toEqual(expectedResult);
  });

  it("should handle the fetchStreams action correctly", () => {
    const expectedResult1 = produce(state, (draft) => {
      draft.loading = true;
      draft.error = false;
    });

    expect(categoriesReducer(state, fetchCategories(categoriesMocks))).toEqual(
      expectedResult1
    );
  });

  it("should handle the fetchStreamsSuccess action correctly", () => {
    const expectedResult2 = produce(state, (draft) => {
      draft.loading = false;
      draft.error = false;
      draft.list = categoriesMocks;
    });

    expect(
      categoriesReducer(state, fetchCategoriesSuccess(categoriesMocks))
    ).toEqual(expectedResult2);
  });
});
