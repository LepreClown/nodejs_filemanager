import {printCurrentPath} from "../helpers/printCurrentPath.js";
import {ErrorsEnum} from "../constants/errors.constant.js";
import {up, cd, ls} from "../operations/navigation/index.js";
import {cat, copy, create, remove, move, rename} from "../operations/fs/index.js";
import {hash} from "../operations/hash/index.js";


export default async function readlineApp(input) {
  const data = input.split(" ")
  const [command, ...args] = data


  printCurrentPath()

  const commands = {
    up: async () => {
      await up();
    },
    cd: async (args) => {
      await cd({args})
    },
    ls: async () => {
      await ls();
    },
    cat: async (args) => {
      await cat({args});
    },
    add: async (args) => {
      await create({args});
    },
    rn: async (args) => {
      await rename({args});
    },
    cp: async (args) => {
      await copy({args});
    },
    mv: async (args) => {
      await move({args});
    },
    rm: async (args) => {
      await remove({args});
    },
    hash: async (args) => {
      await hash({args});
    },


    // cd: async (args = []) => {
    //   if (!validateArgs(args, 1)) return;
    //   const [pathToDirectory] = args;
    //   // await cd(pathToDirectory);
    // },


    '.exit': () => {
      rl.close();
    },
  };


  try {
    if (commands[input]) {
      await commands[input]();
    } else if (commands[command]) {
      await commands[command](args)
    } else {
      console.error(`Invalid input: ${input}`);
    }
  } catch (error) {
    console.error(ErrorsEnum.OPERATION, error);
  } finally {
    printCurrentPath();
  }
}