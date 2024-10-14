import os from "node:os";
import {ErrorsEnum} from "../constants/errors.constant.js";

export const changeToHomeDir = () => {
  try {
    const homeDirectory = os.homedir();
    process.chdir(homeDirectory);
  } catch (error) {
    console.error(ErrorsEnum.DIRECTORY, error);
  }
};
