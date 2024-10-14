import {createInterface} from "node:readline/promises"

import startApp from "./src/utils/startApp.js";
import exitApp from "./src/utils/exitApp.js";
import readlineApp from "./src/utils/readlineApp.js";

const ARGS = process.argv
const NAME_PREFIX = "--username="


const username = ARGS.find((arg) => arg.startsWith(NAME_PREFIX))?.split("=")[1];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

startApp(username);

const main = () => {
  rl.on("line", (input) => {
    const trimmedInput = input.toString().trim()

    if(trimmedInput === ".exit") {
      rl.close();
    } else {
      readlineApp(trimmedInput)
    }
  })
  rl.on("close", () => exitApp(username));
}

main()