# BEM

## What we will cover

* What is BEM?
* Why do I use it?
* How do I use it?

## Notes

BEM stands for block element modifier and is what we call a css architecture pattern.

Each root element is what we call a block, the easiest way to think about this is like
the name of the component you want to make.

The element is a element inside the block, a block can contain many elements but there
is only ever one block per component you have.

The modifier is a style we apply to a element that has been changed to be 
different from other elements of it's own type, e.g when you want to change 
the color of a list item when the user hovers the element, think of it as a
temporary style we add and remove when we are done with it.

The reason I like BEM is that it works on any project and will work just as
well for a small project as for a super large enterprise project.

The best mental picture I can give you is to think of it as a class with fields.

```
class Block { // the block
  block__element // a block element
  block__element // a block element
  block__element--special // a block element with a modifier
}
```

When used correctly BEM is very similar to OOP (object oriented programming) and
it will give your visual components meaningful names just like your objects
and this is where the power comes, you can easily find components regardless
of where they are in the project and change or remove them without ever being
afraid of causing a regression bug (the scariest part of css).
