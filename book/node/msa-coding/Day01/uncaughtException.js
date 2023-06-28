function func(callback) {
  process.nextTick(callback, "callback!!");
}

try {
  func((param) => {
    a.a = 0;
  });
} catch (error) {
  console.log("exception!!");
}

process.on("uncaughtException", (error) => {
  console.log("uncaughtException");
});
