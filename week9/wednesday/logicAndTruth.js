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

// // Also I can be happy and hungry at the same time. They are not mutually exclusive. Stop it.
// // Maybe this is only because I'm an addict though. Today I definitely feel like I can't be happy since I'm not doing meth. I fucking miss meth sometimes.
// // Last night I had this using dream that was so real, I woke up JUST before I was able to get high. Those are the hardest ones to shake. Definitely laid in bed for like an hour contemplating whether or not I want to enact this scheme that could enable me to smuggle some meth in here.
// // But I won't ever do that.
// // It's not worth what it costs. Never forget. Whenever I start to believe that maybe it might be worth it, all I have to do is think back to the memories of the shit I did while I was high.
// // In this way, guilt and shame actually are motives to stay the course, be good, and do what'sright.
// // I'm trying so hard to let it go. I hope that one day this shit stops. I won't be isolated in a safe environment forever.
// // I trust God with this. Moving on.

//! ================ SIMPLIFYING CODE LOGIC=====================

// We can use logical equivalence to simplify and condense our code.

//! Counting to Zero

// Consider a function that takes a number and then counts from that number to 0.

// The number can be positive or negative.
// It can be an integer or non-integer.
// If its not an integer, the first count removes the decimal.

countToZero(5);
5
4
3
2
1
0

countToZero(-5);
-5
-4
-3
-2
-1
0

countToZero(5.5);
5.5
5
4
3
2
1
0

// If the number is a positive non-integer, print the number. Then subtract the non-integer part. Then continue the countdown.

// If the number is a negative non-integer, print the number. Then add the negative non-integer part. Then continue the countdown.

// If the number is a positive integer, print the number. Then subtract 1. Then continue the countdown.

// If the number is a negative integer, print the number. Then add 1. Then continue the countdown.

// If the number is 0, print 0.

//^ To test these conditions, you need to determine whether the number is an integer or not. You can perform this test using the modulo operator. (integer) % 1 === 0. (non-integer) % 1 !== 0

function isInt(n) {
    if (n % 1 === 0) return true;
    if (n % 1 !== 0) return false;
}

//^ We can use isInt to express the above logic (lines 103 - 111) in code.

function countToZero(n) {
    if (n > 0 && !isInt(n)) {
        console.log(n)

        let nextN = n - n % 1

        countToZero(nextN)
    }

    // // Sometimes it really feels like I'm drowning. Right now it's alost 6pm and I still can't shake that dream. How can I love and miss something so much when it wreacked so much havoc on my life? It feels like my feelingns aren't my own, they don't correspond to any of my reasonable thoughts.

    if (n < 0 && !isInt(n)) {
        console.log(n);

        let nextN = n + -(n % 1)

        countToZero(nextN)
    }

    // // I should be practicing thankfulness and trust instead of complaining or worrying. These dreams and feelings are a small price to pay for freedom, that's the truth. The future is in God's hands and totally beyond me, and I trust that He will use the past for good.

    if (n > 0 && isInt(n)) {
        console.log(n);

        let nextN = n - 1;

        countToZero(nextN);
    }

    // // Life is fleeting, we exist and then cease to exist within the cosmic blink of an eye. I'd probably be better of spending my time focused on this material than wondering why I still have a hard time letting go of meth. I was a chronic hard drug user for almost ten years, and I'm sitting at about four months sober. It was never gonna be easy. Better to focus on what matters here and now.

    if (n < 0 && isInt(n)) {
        console.log(n);

        let nextN = n + 1;

        countToZero(nextN);
    }

    if (n === 0) {
        console.log(0)
    }
}
