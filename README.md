# Peepos Strongman quiz

This is Peepo, he created a strongman quiz!

(Project for Nology Game project)

## Objective

I want to create a simple quiz with up to 5 different questions. It will be multiple choice with 4 different answers
to choose from. Only one answer is correct.

The users score will go up if they successfully answer a question.

The total score is out of 5.

## HTML

- [ ] Bullet Point NOT DONE
- [x] Bullet Point DONE

- [x] Numbers buttons (0 to 9 = 10 btns)
- [x] Operator buttons (+, -, x, /, =, %) (6 btns)
- [x] Special Buttons (AC => All Clear), (C = return ie delete last) (2 btns)
- [x] Decimal point button (total 19btns)
- [x] Wrapper element to act as grid
- [x] Display of the operation or result
- [x] Adding classes and ids to be used for styling
  - [x] `.Operator`
  - [x] `.number`
  - [x] `#equal`
  - [x] `#allClear`
  - [x] `#del`
  - [x] `#display`
  - [ ] `#decimal`

## CSS /SCSS

- [x] Border radius on button to have circles
- [x] different colors
  - [x] operators orange
  - [x] numbers gray
  - [x] others lighter gray
- [x] Background color darker grey
- [ ] Font size and weight
- [ ] Hover effect
- [ ] Text centre
- [ ] Grid
  - [ ] Grid elements, gaps, ...

## JS Logic

- [ ] When a user clicks on a number, the number should be added to the display
  - [ ] When clicking on zero, it should not add any other 0s
- [ ] When the user clicks on an operator, that operator should be added to the number
  - [ ] When clicking on the same operator again, nothing should happen
  - [ ] When clicking on a different operator, the operator should be updated
  - [ ] When a user clicks on decimal it should add a point in the number
    - [ ] If a number already contains a decimal it should not add another
