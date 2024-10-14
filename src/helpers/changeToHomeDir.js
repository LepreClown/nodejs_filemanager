import os from "node:os";

import {ErrorsEnum} from "../constants/errors.constant.js";

export const changeToHomeDir = () => {
  try {
    const homeDir = os.homedir();
    process.chdir(homeDir);
  } catch (error) {
    console.error(ErrorsEnum.DIRECTORY, error);
  }
};
