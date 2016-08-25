/*
Given an array of integers, we need to find the number of "holes" that need to
be filled such that it contains all the integers from some range.

Example

For sequence = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(sequence) = 3.

We need to add in 4, 5 and 7.

Input/Output

[time limit] 4000ms (js)
[input] array.integer sequence

An array of distinct integers.

Constraints:
1 ≤ sequence.length ≤ 10,
-10 ≤ sequence[i] ≤ 10.

[output] integer

The minimal number of integers that need to be added to sequence such that it
contains every integer from an interval [L, R] (for some L, R) and no other
integers.
*/

function makeArrayConsecutive2(sequence) {
    var min = Math.min.apply(Math, sequence);
    var max = Math.max.apply(Math, sequence);
    var expectedLength = (max - min) + 1;
    var holes = expectedLength - sequence.length;
    return holes;
};

makeArryConsecutive2([6, 2, 3, 8]);
