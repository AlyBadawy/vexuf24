const railsEnv = process.env.RAILS_ENV || 'development';
const errorFilePath = `esbuild_error_${railsEnv}.txt`;

const isProduction = ['production', 'staging'].includes(railsEnv);

const watch = process.argv.includes('--watch');

const path = require('path');
const fs = require('fs');

const { default: importGlob } = require('esbuild-plugin-import-glob');
const { sassPlugin } = require('esbuild-sass-plugin');

function handleError(error) {
  if (error) fs.writeFileSync(errorFilePath, error.toString());
  else if (fs.existsSync(errorFilePath))
    fs.truncate(errorFilePath, 0, () => {});
}

const buildOptions = {
  absWorkingDir: path.join(process.cwd(), 'app/javascript'),
  bundle: true,
  color: true,
  assetNames: '[name]-[hash].digested',
  chunkNames: '[name]-[hash].digested',
  logLevel: 'info',
  entryPoints: ['application.ts', 'react_dashboard.ts', 'react_admin.ts'],
  external: ['*.ttf'],
  loader: {
    '.jpeg': 'file',
    '.jpg': 'file',
    '.json': 'json',
    '.locale.json': 'file',
    '.png': 'file',
    '.svg': 'file',
  },
  minify: isProduction,
  outdir: path.join(process.cwd(), 'app/assets/builds'),
  plugins: [importGlob(), sassPlugin({ cache: true })],
  sourcemap: !isProduction,
  tsconfig: '../../tsconfig.json',
  format: 'esm',
  splitting: true,
  inject: ['react-shim.ts'],
  mainFields: ['module', 'main', 'browser'],
};

const esbuild = require('esbuild');

async function buildApp() {
  const ctx = await esbuild.context(buildOptions);

  if (watch) {
    await ctx.watch();
  } else {
    try {
      ctx.build();
    } catch (error) {
      handleError(error);
      process.exit(1);
    }
  }
}

buildApp();
