import fs from "fs";
import {ErrorsEnum} from "../../constants/errors.constant.js";



export const ls = async () => {
  const readAndWriteHandler = () => fs.promises.readdir( process.cwd(), {withFileTypes: true});
  const files = await readAndWriteHandler()

  const tableData = files.map((file) => {
    const type = file.isDirectory() ? "directory" : "file";
    return {
      name: file.name,
      type,
    }
  })

  try {
    console.table(tableData)
  } catch (error) {
    console.error(ErrorsEnum.OPERATION, error);
  }
}