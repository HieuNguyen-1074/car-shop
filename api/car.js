/** @format */

import { CARS_URL, ROOT } from './constant';

const getCars = () => {
  return fetch(ROOT + CARS_URL).then((response) => response.json());
};

export const carApi = {
  getCars,
};
