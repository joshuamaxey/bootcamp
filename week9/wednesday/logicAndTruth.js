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

//! Also I can be happy and hungry at the same time. They are not mutually exclusive. Stop it.
//! Maybe this is only because I'm an addict though. Today I definitely feel like I can't be happy since I'm not doing meth. I fucking miss meth sometimes.
//! Last night I had this using dream that was so real, I woke up JUST before I was able to get high. Those are the hardest ones to shake. Definitely laid in bed for like an hour contemplating whether or not I want to enact this scheme that could enable me to smuggle some meth in here.
//! But I won't ever do that.
//! It's not worth what it costs. Never forget. Whenever I start to believe that maybe it might be worth it, all I have to do is think back to the memories of the shit I did while I was high.
//! In this way, guilt and shame actually are motives to stay the course, be good, and do what'sright.
//! I'm trying so hard to let it go. I hope that one day this shit stops. I won't be isolated in a safe environment forever.
//! I trust God with this. Moving on.

//! ================ SIMPLIFYING CODE LOGIC=====================

// We can use logical equivalence to simplify and condense our code.

//! Counting to Zero
