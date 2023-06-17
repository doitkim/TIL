const PILL_RATE = 500;

setInterval(async () => {
  messages = await fetch("https://api.mychatapp.com/messages");
}, PILL_RATE);
