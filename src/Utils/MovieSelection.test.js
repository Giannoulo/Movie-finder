import { getRandomNumbers } from "./MovieSelection";

test("Returns an array of 5 random numbers between 1-1000", () => {
  expect(getRandomNumbers().length).toEqual(5);
  for (const randomNumber of getRandomNumbers()) {
    expect(randomNumber).toBeLessThanOrEqual(1000);
    expect(randomNumber).toBeGreaterThanOrEqual(1);
  }
});
