import { PluralizePipe } from './pluralize.pipe';

describe('PluralizePipe', () => {
  let pipe: PluralizePipe;
  beforeEach(() => {
    pipe = new PluralizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should returns null, when got null', () => {
    expect(pipe.transform(null)).toBe('Найдено - null вариантов');
  });

  it('should return one', () => {
    expect(pipe.transform(1)).toBe('Найдено - 1 вариант');
  });

  it('should return few', () => {
    expect(pipe.transform(3)).toBe('Найдено - 3 варианта');
  });

  it('should return many', () => {
    expect(pipe.transform(11)).toBe('Найдено - 11 вариантов');
  });
});
