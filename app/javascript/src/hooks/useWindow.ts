declare global {
  interface Window {
    FLIPPERS: Record<string, boolean>;
    GIT_REVISION: GitRevision;
    RAILS_ENV: string;
    TOASTY: {
      NOTICE?: string;
      ALERT?: string;
    };
  }
}

type GitRevision = {
  message: string;
  tag: string;
  revision: string;
};

export const useWindowFlipper = (feature: string) => {
  if (!window.FLIPPERS) {
    return false;
  }

  return !!window.FLIPPERS[feature];
};

export const useWindowGitRevision = () => {
  return window.GIT_REVISION || {};
};

export const useWindowRailsEnv = () => {
  return window.RAILS_ENV || {};
};

export const useWindowToasty = () => {
  return window.TOASTY || {};
};
