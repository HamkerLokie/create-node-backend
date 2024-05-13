#!/usr/bin/env node
import { execSync } from 'child_process'
const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
    // eslint-disable-next-line no-undef
  } catch (error) {
    console.error(`Failed to execute ${command}`, error)
    return false
  }
  return true
}
// eslint-disable-next-line no-undef
const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/hamkerLokie/ ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`
console.log(`Cloning the repo with name ${repoName}`)

const checkedOut = runCommand(gitCheckoutCommand)
// eslint-disable-next-line no-undef
if (!checkedOut) process.exit(-1)
console.log(`Installing dependencies for ${repoName}`)
runCommand(installDepsCommand)
console.log(
  'Congratulations! You are ready. Follow the following command to start'
)
console.log(`cd ${repoName} && npm run dev`)
