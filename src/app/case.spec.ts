import { Case } from './case';

describe('Case', () => {
  it('should create an instance', () => {
    expect(new Case(4, 200000)).toBeTruthy();
  });
});
