//^ Construct the truth table for core logic expressions
    // and, or, not, xor
//^ Construct a truth table for compound logic expressions
//^ Translate between base-10 (decimal), base-2 (binary), and base-16 (hexadecimal) integers
//^ Translate between hexadecimal and ASCII
//^ Define bits, bytes, kilobytes, megabytes, and gigabytes

//! Logic and truth

// A       B        A && B
// ------------------------
// false   false    false
// false   true     false
// true    false    false
// true    true     true

// A    B    A && B
// ----------------
// 0    0      0
// 0    1      0
// 1    0      0
// 1    1      1

// A    B    A || B
// ----------------
// 0    0      0
// 0    1      1
// 1    0      1
// 1    1      1

// A   !A
// ---------
// 0    1
// 1    0

// A    B    A && B    !(A && B)
// -----------------------------
// 0    0      0           1
// 0    1      0           1
// 1    0      0           1
// 1    1      1           0

// A    B   !A   !B    !A || !B
// -----------------------------
// 0    0    1    1       1
// 0    1    1    0       1
// 1    0    0    1       1
// 1    1    0    0       0

// A    B    A ^ B
// ----------------
// 0    0      0
// 0    1      1
// 1    0      1
// 1    1      0

//! Also I CAN be happy and hungry at the same time. They are not mutually exclusive. Stop it.
