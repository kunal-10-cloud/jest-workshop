const { calculateFinalAmount } = require("../src/pricing");

// 1. No Coupon
test("return subtotal when subtotal<1000", () => {
  expect(calculateFinalAmount(999)).toBe(999);
});

test("apply 5% discount when subtotal>=1000", () => {
  expect(calculateFinalAmount(2000)).toBe(1900); // 2000 - 100
});

test("return 0 when subtotal=0", () => {
  expect(calculateFinalAmount(0)).toBe(0);
});

// 2. SAVE10 Coupon
test("apply 10% discount when subtotal<1000", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90); 
});

test("apply 5% then 10% discount (on original subtotal) when subtotal>=1000", () => {
  expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
});

test("cap discount at 100", () => {
  expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
});

// 3. FLAT50 Coupon
test("subtract 50 when subtotal<1000", () => {
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
});

test("apply 5% then subtract 50 when subtotal>=1000", () => {
  
  expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);
});

test("return 0 if total goes below 0", () => {
  expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
});

// 4. Invalid Subtotal
test("throw error for negative subtotal", () => {
  expect(() => calculateFinalAmount(-10)).toThrow("Invalid subtotal");
});

test("throw error for non-number subtotal", () => {
  expect(() => calculateFinalAmount("100")).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
  expect(() => calculateFinalAmount(null)).toThrow("Invalid subtotal");
});

// 5. Case Insensitivity
test("handle lowercase coupons", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
  expect(calculateFinalAmount(100, "flat50")).toBe(50);
});

test("handle mixed case coupons", () => {
  expect(calculateFinalAmount(100, "SaVe10")).toBe(90);
});