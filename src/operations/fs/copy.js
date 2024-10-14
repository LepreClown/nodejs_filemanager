import {join, basename} from "node:path";
import fs from "node:fs";

import {ErrorsEnum} from "../../constants/errors.constant.js";
import {validateCountArgs} from "../../helpers/validateCountArgs.js";

const EXPECTED_ARGS_LENGTH = 2;

export const copy = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;
  const [pathToFile, pathToNewDir] = args;
  const dirPath = join(pathToNewDir, basename(pathToFile))

  const isExistsFile = fs.existsSync(pathToNewDir);
  const readableStream = fs.createReadStream(pathToFile);
  const writableStream = fs.createWriteStream(dirPath);

  if (!isExistsFile) {
    console.error(ErrorsEnum.EXIST);
  }

  await readableStream.pipe(writableStream);
}