//! Why Do Companies Whiteboard?

// Steps to solving white-boarding questions are identical to the steps necessary to solve real-world practical problems

// Companies want to see how you perform as a team member in a real team

//^ Interviewers will be looking for:

// 1. Can you think algorithmically?
// 2. Are you a good communicator? Are you someone they want to think through a new feature with?
// 3. Can you code? And can you code neatly and correctly?

//! Correct Steps

// 1. Clarify the problems & test I/O and edge cases
// 2. Formulalte your approach(es)
// 3. Pseudocode the best approach
// 4. Write the code
// 5. Walk through an example input
// 6. Determine the Big O time and space complexity

//! Clarification

//^ Before you jump into coding, ask questions. Don't rush

// 1. What are we coding?
// 2. Are there any constraints on the input and output?
// 3. What edge cases can we expect?

//! Test I/O

// Start with simple inputs and then slowly build up the size or complexity of inputs.

// Look for patterns and things that remind you of problems that you know how to solve

//^ If you draw a blank, use these strategies to get started:

// 1. Make up a sample input and computer it. Do this two or three times.
// 2. Go through data structures in your head. Go through algorithms you know simultaneously. If you find one that works for this problem, use it.
// 3. If not, find a naive solution and get started. Then optimize.
// 4. Come up with a simpler version of the problem, then solve it and progressively add complexity
// 5. Think aloud about the likely bound on efficiency for your solution
        // This is an easy way to score points
        // "I know I'll have to iterate through all the points, so it's at least linear time."
        // "The problem is trivial when the set is sorted. So it can be solved in nLOGn time. Let's see if we can do better than n Log n"

//! Pseudocode

// Never skip this step.

// Pseudcode is the English expression of your approach to a problem.

// Lay out your strategy step-by-step so that you can refer back to your pseudocode.

// You and your interviewer both need pseudocode to help you keep track of your thoughts and progression

//^ Remember:

// 1. Be as detailed as possible
// 2. Spend as much time as you want (within reason)
// 3. Make sure you can reason through your implementation of every step

//! During the Problem

// About 60% of your time should be spent PRIOR to this point (actually implementing the solution)

// If you sprint to coding, you may have spent too little time planning and may struggle here.

// If you've planned correctly, this section should be the easiest part of the process.

//^ Remember:

// 1. You and your interviewer are facing the same direction
// 2. You and your employer are solving the problem together. Say 'we,' not 'I.'
// 3. Don't stop until your employer tells you to

//^ Your style has an impact:

// 1. Be confident. If you don't know the answer, engage the problem and don't give up.
// 2. Talk through the problem. If you can write and talk togeter, great. If not, explain what you plan to write and then write it.
// 3. The interviewer may give you hints. They will ask questions to keep you on track.
// 4. If they ask you, "Does this work?" taking a moment to think. Walk through the steps out loud. If you say yes, say it confidently.
// 5. LISTEN to the interviewer.

//! Walk Through an Example Input

// 1. Initiate this step. Don't wait to be prompted.
// 2. Track all your variables.
// 3. Draw stacks if you're using a recursive method.
// 4. Follow each iteration of your loops.
// 5. Reason through your code from input to output.

//! Time and Space Complexity

// 1. You should know how to do this. Refer back to the Big O readings if you need to.
// 2. Time is expensive. Space is cheap.
// 3. If your approach is naive, optimize it.
// 4. If not, ask your interviewer if they want you to optimize.

//! Strategies

// Keep a mental list of general strategies you can turn to:

//^ 1. Bucketizing with a hash.
// If the input set is bounded, try organzing it into a hash
// EX. Sort an array of 100,000 integers that are all in the range 1-100

//^ 2. Dynamic Programming, or 'Divide and Conquer'
// Divide a problem into smaller and smaller (and equal) subproblems

//^ 3. Look for useful mathematial properties
// Sometimes you havei ndividual values when really what you care about is their sum
// EX. For an array of integers 1 - 100 where all elements appear once except one that appears twice, find the repeat

//^ 4. Amortized Analysis (analyze a given algorithm's complexity)
// It's ok to do something memory- or space-intensive if you can prove that the cost yields a greater payoff
// EX. Implement a queue using two stacks

//^ 5. Keep a stack or a queue on the side to track values as your algorithm runs

//^ 6. Keep two pointers for the same iteration
// EX. Reerse a string in place (use no more memory than is required to store the length of the string)

//^ 7. Perform an operation twice
// EX. Reverse the word order of a string, but not the letters within the words

//^ 8. Sort the input
// EX. Finding anagrams

//^ 9. Approach the problem from the back end
// EX. https://www.techinterview.org/post/526325766/pirates/

//^ 10. Use binary numbers instead of decimal numbers
// EX. http://www.techinterview.org/post/526313890/bad-king

//^ 11. For efficiency, use binary search instead of incrementation. Especially for implementing math operators
// EX. Implement division without using "/" in less than O(n) time

//! Don't Be Sly

// If you don't understand the problem, ask for clarification

// A well-formulated question is as impressive as a good answer.

// If you don't know something, don't make one up. Tell the interviewer you don't know and then try your best guess.

// When you hit a snag, don't try to cover it up to look like you were on the right track. Explain to the interviewer why you believe that the current hypothesis will not work.

//! Handling Questions You've Seen Before

// Tell your interviewer you've seen the problem before. Then put on a sad face to show you were excited about solving a new problem.

// You won't necessarily perform better on a question you've seen before.

// Speed is overrated.

// The real puspose of a whiteboarding problem is to show your interviewer the way that you think.
