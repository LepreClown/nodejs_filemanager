import {printCurrentPath} from "../helpers/printCurrentPath.js";
import {changeToHomeDir} from "../helpers/changeToHomeDir.js";

export default function startApp(username = "anonymous") {
  changeToHomeDir()
  printCurrentPath()
  console.log(`Welcome to the File Manager, ${username}!`);
}