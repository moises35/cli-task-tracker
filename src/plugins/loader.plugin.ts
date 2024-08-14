import ora, { Ora } from 'ora';

export const LoaderPlugin = {
  start: (text: string) => ora(text).start(),
  stop: (spinner: Ora) => spinner.stop(),
};