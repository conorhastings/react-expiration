import React from "react";
import renderer from "react-test-renderer";
import Expiration from "./index.js";

/* note: this test will fail in the year 3000 */
test("Expiration Component should render not expired component if current date is before expirationDate", () => {
  const tree = renderer
    .create(
      <Expiration
        render={isExpired => isExpired ? "expired" : "not expired"}
        expirationDate={new Date("12/31/2999")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* note: this test might fail if there's ever time travel and you run these thests in the 90s */
test("Expiration Component should render expired component if current date is after expirationDate", () => {
  const tree = renderer
    .create(
      <Expiration
        render={isExpired => (isExpired ? "expired" : "not expired")}
        expirationDate={new Date("12/31/1999")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
