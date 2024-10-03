import { isEven } from './is-even';

describe('isEven', () => {
  describe('Given an even number', () => {
    describe('When passed 2', () => {
      it('Then it should be true', () => {
        expect(isEven(2)).toBeTruthy();
      });

      it('Then it should be true as boolean', () => {
        expect(typeof isEven(2) === 'boolean').toBeTruthy();
      });
    });

    [4, 6, 8, 100, 10000, 100000].forEach((test: number) => {
      describe(`When passed ${test}`, () => {
        it('Then it should be true', () => {
          expect(isEven(test)).toBeTruthy();
        });
      });
    });
  });

  describe('Given an odd number', () => {
    describe('When passed 1', () => {
      it('Then it should be false', () => {
        expect(isEven(1)).toBeFalsy();
      });
    });

    [3, 5, 7, 101, 10001, 100003].forEach((test: number) => {
      describe(`When passed ${test}`, () => {
        it('Then it should be false', () => {
          expect(isEven(test)).toBeFalsy();
        });
      });
    });
  });
});