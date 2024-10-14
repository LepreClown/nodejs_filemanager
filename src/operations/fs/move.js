import {basename, join} from "node:path";
import fs from "node:fs";
import {rm} from "node:fs/promises";

import {validateCountArgs} from "../../helpers/validateCountArgs.js";
import {ErrorsEnum} from "../../constants/errors.constant.js";


const EXPECTED_ARGS_LENGTH = 2;

export const move = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;
  const [pathToFile, pathToNewDir] = args;
  const dirPath = join(pathToNewDir, basename(pathToFile))

  const readableStream = fs.createReadStream(pathToFile);
  const writableStream = fs.createWriteStream(dirPath);
  const isExistsFile = fs.existsSync(pathToNewDir);

  if (!isExistsFile) {
    console.error(ErrorsEnum.EXIST);
  }

  await readableStream.pipe(writableStream);

  try {
    await rm(pathToFile, {recursive: true})
  } catch (error) {
    console.error(ErrorsEnum.OPERATION);
  }
}