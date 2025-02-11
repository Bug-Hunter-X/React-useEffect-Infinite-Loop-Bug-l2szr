# React useEffect Infinite Loop
This repository demonstrates a common React bug: an infinite loop caused by an incorrectly used dependency array in the `useEffect` hook.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected version. 

The issue arises from adding `count` to the dependency array. This causes the effect to re-run every time `count` updates, and since the effect updates `count`, this creates an infinite loop.  The solution removes `count` from the dependency array. If you need to run code after every render, use an empty array.