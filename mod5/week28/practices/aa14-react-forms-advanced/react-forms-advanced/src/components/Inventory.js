import React from "react";

const Inventory = () => {
  return (
    <form>
      <div>
        <h2>Inventory Assessment</h2>
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of <em>sight</em>.
        </p>
        <select
          name="q1"
          onChange={() => console.log("on change q1")}
          value={1}
        >
          <Options />
        </select>
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of <em>hearing</em>.
        </p>
        <Options />
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of{" "}
          <em>touch, taste,</em> or <em>smell</em>.
        </p>
        <Options />
      </div>
    </form>
  );
};

const Options = () => {
  return (
    <ul>
      <li>Strongly Disagree</li>
      <li>Disagree</li>
      <li>Neutral</li>
      <li>Agree</li>
      <li>Strongly Agree</li>
    </ul>
  );
};

// {
//     "code":"q1",
//     "type": "likert",
//     "stem": "I learn the most when the lesson engages my sense of <em>sight</em>.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q2",
//     "type": "likert",
//     "stem": "I learn the most when the lesson engages my sense of <em>hearing</em>.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q3",
//     "type": "likert",
//     "stem": "I learn the most when the lesson engages my sense of <em>touch, taste,</em> or <em>smell</em>.",
//     "scale": "Agreement",
//     "pagebreak": true
//   },
//   {
//     "code":"q4",
//     "type": "likert",
//     "stem": "I find it easiest to remember things I see rather than things I hear or do.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q5",
//     "type": "likert",
//     "stem": "I find it easiest to remember things I hear rather than things I see or do.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q6",
//     "type": "likert",
//     "stem": "I find it easiest to remember things I do rather than things I see or hear.",
//     "scale": "Agreement",
//     "pagebreak": true
//   },
//   {
//     "code":"q7",
//     "type": "likert",
//     "stem": "I would rather look at photos than listen to music or workout (physical exercise).",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q8",
//     "type": "likert",
//     "stem": "I would rather listen to music than look at photos or workout (physical exercise).",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q9",
//     "type": "likert",
//     "stem": "I would rather workout (physical exercise) than look at photos or listen to music.",
//     "scale": "Agreement",
//     "pagebreak": true
//   },
//   {
//     "code":"q10",
//     "type": "likert",
//     "stem": "The lessons I remember best are those in which I had to use my sense of sight.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q11",
//     "type": "likert",
//     "stem": "The lessons I remember best are those in which I had to use my sense of hearing.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q12",
//     "type": "likert",
//     "stem": "The lessons I remember best are those in which I had to use my sense of touch, smell or taste.",
//     "scale": "Agreement",
//     "pagebreak": true
//   },
//   {
//     "code":"q13",
//     "type": "likert",
//     "stem": "When I get a new device, I usually read the instructions to learn how to operate it.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q14",
//     "type": "likert",
//     "stem": "When I get a new device, I usually ask someone to explain verbally how to operate it.",
//     "scale": "Agreement"
//   },
//   {
//     "code":"q15",
//     "type": "likert",
//     "stem": "When I get a new device, I usually try a hands-on approach to figure out how to operate it.  ",
//     "scale": "Agreement",
//     "pagebreak": true
//   }

export default Inventory;
