import { appApi } from '@/store/appApi';
import { getMiddlewares } from '@/store/middlewares';

describe('middlewares', () => {
  let originalNodeEnv: string | undefined;

  beforeEach(() => {
    // Store the original NODE_ENV before each test
    originalNodeEnv = process.env.NODE_ENV;
  });

  afterEach(() => {
    // Restore the original NODE_ENV after each test
    process.env.NODE_ENV = originalNodeEnv;
  });

  it('should always contain appApi.middleware', () => {
    expect(getMiddlewares()).toContain(appApi.middleware);
    expect(getMiddlewares()).toHaveLength(1);
  });

  it('should contain logger middleware in development env.', () => {
    process.env.NODE_ENV = 'development';
    expect(getMiddlewares()).toContain(appApi.middleware);
    expect(getMiddlewares()).toHaveLength(2);
  });

  it('should not contain logger middleware in production env.', () => {
    process.env.NODE_ENV = 'production';
    expect(getMiddlewares()).toContain(appApi.middleware);
    expect(getMiddlewares()).toHaveLength(1);
  });
});
