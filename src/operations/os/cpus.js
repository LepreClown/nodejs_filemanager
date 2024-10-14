import os from 'node:os';

export const cpus = async () => {
  const count = os.cpus().length
  console.log(`Number of CPUs: ${count}`)

  os.cpus().forEach((cpu) => {
    const model = cpu.model
    const clockRate = (cpu.speed / 1000)
    console.log(`  Model: ${model}`);
    console.log(`  Clock Rate: ${clockRate} GHz`);
  })
}