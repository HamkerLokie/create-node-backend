#!/usr/bin/env node
import { execSync } from 'child_process';

// Function to run a command and handle errors
const runCommand = command => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

// Get repository name from command line argument
const repoName = process.argv[2];

// Commands
const gitCheckoutCommand = `git clone --depth 1 https://github.com/HamkerLokie/create-node-backend ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

// Header separator
const headerSeparator = '='.repeat(40);

// Output messages
console.log(headerSeparator);
console.log(`🚀 Cloning the repository: ${repoName}`);
console.log(headerSeparator);

// Run git clone command
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  console.error('❌ Exiting due to clone failure');
  process.exit(-1);
}

console.log(headerSeparator);
console.log(`📦 Installing dependencies for ${repoName}`);
console.log(headerSeparator);

// Install dependencies
runCommand(installDepsCommand);

console.log(headerSeparator);
console.log('🎉 Congratulations! Setup is complete.');
console.log(`👉 Run the following command to start:`);
console.log(`cd ${repoName} && npm run dev`);
console.log(headerSeparator);
