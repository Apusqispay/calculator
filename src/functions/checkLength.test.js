import checkLength from "./checkLength";
import { ERROR } from "../reducers/computingReducer";

it('returns null', () => {
     let str = 12345;
     expect(checkLength(str)).toBe(null);
});

it('returns ERROR', () => {
     let str = 12345678900;
     expect(checkLength(str)).toBe(ERROR);
});