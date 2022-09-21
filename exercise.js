function printName() {
  const helloName = "Hi John";
  return function () {
    return helloName;
  };
}
const inner = printName();

setTimeout(() => {
  console.log(inner());
}, 1000);
