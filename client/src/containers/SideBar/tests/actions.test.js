import { FETCH_CATEGORIES_SUCCESS,FETCH_CATEGORIES} from '../constants';
import { fetchCategories, fetchCategoriesSuccess} from '../actions';
import { categoriesMocks } from './mocks/categoriesMocks';

describe('Side bar actions', () => {

    describe('fetch categories', () => {
        it('should return the correct type', () => {
            const expectedResult = {
                type: FETCH_CATEGORIES,
            };
    
            expect(fetchCategories()).toEqual(expectedResult);
        });
    });

    describe('fetchStreamsSuccess', () => {
        it('should return the correct type and the passed repos', () => {
          const testCategories = categoriesMocks;
          const expectedResult = {
            type: FETCH_CATEGORIES_SUCCESS,
            list: testCategories,
          };
    
          expect(fetchCategoriesSuccess(categoriesMocks)).toEqual(expectedResult);
        });
      });
  });
