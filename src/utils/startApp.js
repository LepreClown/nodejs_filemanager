import {printCurrentPath} from "../helpers/printCurrentPath.js";

export default function startApp(username = "anonymous") {
  printCurrentPath()
  console.log(`Welcome to the File Manager, ${username}!`);
}