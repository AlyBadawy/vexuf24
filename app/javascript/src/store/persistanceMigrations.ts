/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const persistanceMigrations = {
  0: (state: any) => {
    // migration clear out device state
    return {
      ...state,
      device: undefined,
    };
  },
};
