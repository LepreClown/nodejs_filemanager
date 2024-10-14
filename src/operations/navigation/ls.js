import fs from "node:fs/promises";

import {ErrorsEnum} from "../../constants/errors.constant.js";

const DIRECTORY = "directory"
const FILE = "file"

export const ls = async () => {
  const readAndWriteHandler = async () => await fs.readdir(process.cwd(), {withFileTypes: true});
  const files = await readAndWriteHandler()

  const tableData = files.map((file) => {
    const type = file.isDirectory() ? DIRECTORY : FILE;
    return {
      name: file.name,
      type,
    }
  })

  const sortedTableData = tableData.sort((a, b) => {
    if (a.type === DIRECTORY && b.type === FILE) {
      return -1;
    } else if (a.type === FILE && b.type ===DIRECTORY) {
      return 1;
    } else {
      return 0;
    }
  });

  try {
    console.table(sortedTableData)
  } catch (error) {
    console.error(ErrorsEnum.OPERATION, error);
  }
}