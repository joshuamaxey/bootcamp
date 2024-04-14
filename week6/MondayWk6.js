//! The Message Queue and Event Loop

// JavaScript is ASYNCHRONOUS and can handle unpredictable events that occur during our application's runtime. This is what makes JavaScript so dynamic and what enables it to be interactive.

//^ Learning Objectives:

//^ 1. Explain how the JavaScript runtime uses the CALL STACK and MESSAGE QUEUE in its EVENT LOOP.
//^ 2. Identify the two operations that characerize a QUEUE data structure.

//& The Event Loop

// JavaScript uses a model of execution called an EVENT LOOP. The Event Loop has two parts:

// 1. The first part of the EVEN LOOP is the CALL STACK. The call stack is the structure used to keep track of function calls and their execution. It keeps track of the current "task" in progress. A task may consist of multiple function calls. For example, if one function calls another function, both are considered to be a part of the same task.

// 2. The other part of the EVENT LOOP is called the MESSAGE QUEUE. The message queue keeps track of tasks taht cannot be executed at this moment but will be executed once the current task is finished. Remember that JavaScript is SINGLE-THREADED, which means taht it can only perform one task at a time. This means that ONE TASK will NEVER be interupted by ANOTHER TASK.

//& In summary:

// 1. CALL STACK: The current task and all SYNCHRONOUS tasks are performed on the stack.
// 2. MESSAGE QUEUE: Incoming ASYNCHRONOUS events wait on the queue.

// The queue ensures that events which occurred first will be handled first, and so on. Once the stack is empty, that means the current ttask is complete and the next task can be moved from the queue to the stack for execution. This cycle repeats again and again, which is why it is called the Event LOOP.
