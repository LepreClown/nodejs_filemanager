import {validateCountArgs} from "../../helpers/validateCountArgs.js";
import {createBrotliDecompress} from "node:zlib";
import fs from "node:fs";
import {join} from "node:path";

const EXPECTED_ARGS_LENGTH = 2;

export const decompress = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;

  const [pathToFile, pathToDir] = args

  const unzip = createBrotliDecompress();
  const readStream = fs.createReadStream(join(process.cwd(), pathToFile))
  const writeStream = fs.createWriteStream(join(process.cwd(), pathToDir))

  readStream.pipe(unzip).pipe(writeStream);
}