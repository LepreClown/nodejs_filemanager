import {createBrotliCompress} from "node:zlib";
import fs from "node:fs";
import {join, normalize} from "node:path";

import {validateCountArgs} from "../../helpers/validateCountArgs.js";

const EXPECTED_ARGS_LENGTH = 2;

export const compress = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;

  const [pathToFile, pathToDir] = args

  const gzip = createBrotliCompress();
  const readStream = fs.createReadStream(join(process.cwd(), normalize(pathToFile)))
  const writeStream = fs.createWriteStream(join(process.cwd(), normalize(pathToDir)))

  readStream.pipe(gzip).pipe(writeStream);
}