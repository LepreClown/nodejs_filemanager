import fs from "node:fs";
import {rm} from "node:fs/promises";
import {validateCountArgs} from "../../helpers/validateCountArgs.js";
import {ErrorsEnum} from "../../constants/errors.constant.js";

const EXPECTED_ARGS_LENGTH = 1;


export const remove = async ({args}) => {
  if (!validateCountArgs(args?.length, EXPECTED_ARGS_LENGTH)) return;
  const filePath = args[0];

  const isExistsFile = fs.existsSync(filePath);
  const removeHandler = async () => rm(filePath)

  if (!isExistsFile) {
    console.error(ErrorsEnum.EXIST)
  }

  try {
    await removeHandler()
  } catch (e) {
    console.error(ErrorsEnum.OPERATION)
  }
}