import {rename as renameFile} from "node:fs/promises";
import fsSync from "node:fs";

import {ErrorsEnum} from "../../constants/errors.constant.js";
import {validateCountArgs} from "../../helpers/validateCountArgs.js";

const EXPECTED_ARGS_LENGTH = 2;

export const rename = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;
  const [pathToFile, newFileName] = args;

  const isExistsFile = fsSync.existsSync(pathToFile);
  const renameHandler = async () => renameFile(pathToFile, newFileName)

  if (!isExistsFile) {
    console.error(ErrorsEnum.EXIST);
  }

  try {
    await renameHandler()
  } catch (error) {
    console.error(ErrorsEnum.OPERATION);
  }
}