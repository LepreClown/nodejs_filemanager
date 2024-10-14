import fs from "node:fs";
import {createHash} from "node:crypto";

import {ErrorsEnum} from "../../constants/errors.constant.js";
import {validateCountArgs} from "../../helpers/validateCountArgs.js";

const EXPECTED_ARGS_LENGTH = 1;

export const hash = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;

  const hash = createHash("sha256");
  const filePath = args[0];

  const isExistsFile = fs.existsSync(filePath);
  const stream = fs.createReadStream(filePath)

  if (!isExistsFile) {
    console.error(ErrorsEnum.EXIST);
  }

  stream.on("data", data => {
    hash.update(data)
  })

  stream.on('end', () => {
    const hashHex = hash.digest('hex');
    console.log(hashHex);
  });
}