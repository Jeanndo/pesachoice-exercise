/* eslint-disable no-undef */

import { Selector } from "testcafe";

const loginBtn = Selector("#login-btn");
const haveAccountBtn = Selector("#have-account-btn");
const emailInput = Selector("#email-address");
const passwordInput = Selector("#password");
const submitBtn = Selector("#submit-btn");

// fixture`Test structure 1`.page`http://localhost:3001/`;

// test("first test in TC", async (t) => {
//some code here
// });

// fixture`Test structure 2`.page`http://localhost:3001/`;

// test("seond  test in TC", async (t) => {
//some code here
// });

fixture`User actions`.page`http://localhost:3001/`;

// test("Lean User actions Type Text", async (t) => {
//   await t
//     .typeText(loginBtn, "hello world")
//     .typeText(loginBtn, "hello world")
//     .typeText(loginBtn, "hello world of programmers", { replace: true });
// });

// test("Lean User actions wait", async (t) => {
//   await t;
// });

test.only("Lean User actions Click", async (t) => {
  await t
    .click(loginBtn)
    .wait(3000)
    .click(haveAccountBtn)
    .wait(3000)
    .typeText(emailInput, "jean.ukwitegetse@pesachoice.com")
    .wait(3000)
    .typeText(passwordInput, "12345678")
    .wait(3000)
    .click(submitBtn)
    .wait(5000);
});

// test("Lean User actions wait", async (t) => {
//   await t;
// });
