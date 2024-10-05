import { SentenceCasePipe } from './sentence-case.pipe';

describe('UppercaseFirstPipe', () => {
  it('create an instance', () => {
    const pipe = new SentenceCasePipe();
    expect(pipe).toBeTruthy();
  });
});
