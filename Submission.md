# Jest Workshop Submission

## Student Details
- Name:Aditya Bijalwan 
- URN Number: 2024-B-07062006A
- GitHub Username: kunal-10-cloud

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No Coupon Logic  
**What it protects against:**  
Ensures base subtotal calculations are correct, applying a 5% discount only when subtotal >= 1000, and verifies 0 subtotal handling.  

---

### 2. Test Name: SAVE10 Coupon  
**What it protects against:**  
Verifies correctness of 10% discount logic, ensures discount stacking (5% + 10%) for large orders, and validates the maximum discount cap of 100.  

---

### 3. Test Name: FLAT50 Coupon  
**What it protects against:**  
Validates fixed 50 deduction logic, correct stacking with 5% discount, and prevents total amount from dropping below zero (boundary case).  

---

### 4. Test Name: Invalid Subtotal Handling  
**What it protects against:** 
 Prevents application crashes or incorrect calculations by ensuring errors are thrown for negative numbers or non-numeric inputs.  

---

### 5. Test Name: Case Insensitivity Support  
**What it protects against:**  
Ensures user experience isn't broken by coupon capitalization (e.g., 'save10' vs 'SAVE10'), preventing strict string matching bugs.  

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes 
- GitHub Actions Run URL: https://github.com/kunal-10-cloud/jest-workshop/actions/runs/21825702921

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?
learned how to configure GitHub Actions to automatically run tests on every push and pull request