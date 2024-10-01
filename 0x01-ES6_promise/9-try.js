// Author: Bruno Okoth
// This function takes a mathematical function as a parameter. 
// It attempts to execute the function and captures any errors that may occur. 
// The result (either the value returned by the function or an error message) 
// is added to a queue, along with a message indicating that the guardrail was processed. 
// The function returns this queue.

export default function guardrail(mathFunction) {
  const queue = [];
  let value;

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }

  queue.push(value);
  queue.push('Guardrail was processed');

  return queue;
}
