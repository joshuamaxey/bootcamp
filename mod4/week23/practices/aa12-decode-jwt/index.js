// Parsing a JWT

const sampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im15c2VsZkBhcHBhY2FkZW15LmlvIn0.EqRikwoGyAlfvblF_FdbnQlbAQGvWZlccFnmHOVdaLg";

// #1: Splitting the JWT into 3 parts: header, payload, signature

const jwtArray = sampleJwt.split(".");
console.log(jwtArray)

const [header, payload, signature] = jwtArray;

console.log(header);
console.log(payload);
console.log(signature)

// #2: Decoding a JWT's header and payload
// Hint: Buffer.from(string, 'base64').toString();

const decodedHeader = Buffer.from(header, 'base64').toString();
console.log(decodedHeader);

const decodedPayload = Buffer.from(payload, 'base64').toString();
console.log(decodedPayload);

// #3: Finally, take note of the algorithm and email in the decoded header and
// payload when you run this file. You'll need these to complete the next quiz.
