/* eslint-disable no-console */
import chalk from 'chalk';

export default prefix => {
  const pre = prefix || 'frontmen';
  const indentation = prefix.length < 8 ? 2 : 1;

  return {
    info: message => {
      console.log(chalk`{gray [${pre}]}${'\t'.repeat(indentation)} ${message}`);
    },

    success: message => {
      console.log(chalk`{gray [${pre}]}${'\t'.repeat(indentation)} {green ${message}}`);
    },

    error: message => {
      console.log(chalk`{gray [${pre}]}${'\t'.repeat(indentation)} {red ${message}}`);
    }
  };
};
