import {isAbsolute, join} from "node:path"

import {validateCountArgs} from "../../helpers/validateCountArgs.js";
import {checkIsHasDir} from "../../helpers/checkIsHasDir.js";

const EXPECTED_ARGS_LENGTH = 1;

export const cd = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;

  const path = args[0]
  const changeDirPath = isAbsolute(path) ? path : join(process.cwd(), path);
  const isDir = await checkIsHasDir(changeDirPath)

  if (isDir) {
    process.chdir(changeDirPath);
  } else {
    console.error(`Error: Directory not found`);
  }
}