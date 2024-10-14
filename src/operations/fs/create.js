import fs from "node:fs/promises";
import path from "node:path";

import {ErrorsEnum} from "../../constants/errors.constant.js";
import {validateCountArgs} from "../../helpers/validateCountArgs.js";

const EXPECTED_ARGS_LENGTH = 1;

export const create = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;

  const fileName = args[0];
  const filePath = path.join(process.cwd(), fileName)

  const fileHandler = async () => fs.writeFile(filePath, "", {flag: "wx"});

  try {
    await fileHandler()
  } catch (error) {
    console.error(ErrorsEnum.OPERATION);
  }
}