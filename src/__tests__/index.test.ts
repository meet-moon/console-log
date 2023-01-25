import { log } from '../index';
test('console log working fine', () => {
    expect(log("both are equal")).toBe(`log both are equal`);
});
