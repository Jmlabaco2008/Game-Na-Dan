#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('Setting up database...');
console.log('DATABASE_URL:', process.env.DATABASE_URL ? '✓ Set' : '✗ Not set');

if (!process.env.DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set');
  console.error('Please add your Supabase connection string in the Vars section');
  process.exit(1);
}

// Run drizzle-kit push
const drizzle = spawn('npx', ['drizzle-kit', 'push'], {
  cwd: projectRoot,
  stdio: 'inherit',
  env: { ...process.env }
});

drizzle.on('close', (code) => {
  if (code === 0) {
    console.log('\n✓ Database setup complete!');
  } else {
    console.error('\n✗ Database setup failed');
    process.exit(code);
  }
});
