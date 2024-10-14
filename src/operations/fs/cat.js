import fs from "node:fs";
import {join} from "node:path";

import {validateCountArgs} from "../../helpers/validateCountArgs.js";
import {ErrorsEnum} from "../../constants/errors.constant.js";
import {printCurrentPath} from "../../helpers/printCurrentPath.js";


const EXPECTED_ARGS_LENGTH = 1;

export const cat = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;
  const filePath = args[0]

  const readableStream = fs.createReadStream(join(process.cwd(), filePath), {encoding: 'utf-8'});

  readableStream.on('error', () => {
    console.error(ErrorsEnum.OPERATION);
  });

  readableStream.on('data', (chunk) => {
    console.log(chunk);
  });
}