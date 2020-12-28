import { takeLatest } from "redux-saga/effects";
import * as categoriesApi from "../../../api/categories/get";
import CategoriesSaga, { fetchCategories } from "../saga";
import { runSaga } from "redux-saga";
import { fetchCategoriesSuccess } from "../actions";
import { categoriesMocks } from "./mocks/categoriesMocks";
import { FETCH_CATEGORIES } from "../constants";

const axios = require("axios");

describe("CategoriesSaga", () => {
  const genObject = CategoriesSaga();
  it("should wait for every FETCH_CATEGORIES and call fetchCategories", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(FETCH_CATEGORIES, fetchCategories)
    );
  });
  it("should be done", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("fetchCategories saga tests", () => {
  it("should call api and dispatch success action", async () => {
    const dummyCategories = {
      data: categoriesMocks
    };

    const requestCategories = jest
      .spyOn(categoriesApi, "get")
      .mockImplementation(() => Promise.resolve(dummyCategories));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchCategories
    );

    expect(requestCategories).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchCategoriesSuccess(dummyCategories)]);
    requestCategories.mockClear();
  });
});
