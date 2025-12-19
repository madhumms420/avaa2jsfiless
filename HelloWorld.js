export default function HelloWorld() {
  const message = "Hello from JavaScript";

  function greet() {
    console.log(message);
  }

  return {
    message,
    greet
  };
}
