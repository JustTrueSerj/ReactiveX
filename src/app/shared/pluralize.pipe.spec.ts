import { PluralizePipe } from './pluralize.pipe';

describe('PluralizePipe', () => {
  let pipe: PluralizePipe;
  beforeEach(() => {
    pipe = new PluralizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns null, when got null', () => {
    expect(pipe.transform(null)).toBe('Найдено null вариантов');
  });
});
