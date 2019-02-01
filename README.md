# Node InterOp using Stdin and Stdout

This demonstrates a fairly simple interface between Node and a different language leveraging standard in/out.

The usefulness of this is that any language that has a "superior" expressiveness for a problem or interface into some new gadgetry can be leveraged. Further, since the "child" remains a resident process, there is no overhead of spinning the process up each time it is used.
