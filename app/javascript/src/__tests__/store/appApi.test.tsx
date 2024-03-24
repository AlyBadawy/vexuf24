/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CSRFToken } from '@/store/appApi';

describe('appApi', () => {
  describe('CSRFToken', () => {
    it('should return the correct CSRF token', () => {
      // Mock the document.querySelector function
      // eslint-disable-next-line testing-library/no-node-access
      document.querySelector = jest.fn().mockImplementation(() => {
        return { getAttribute: () => 'test-token' };
      });

      const token = CSRFToken();
      expect(token).toBe('test-token');

      jest.clearAllMocks();
    });
  });
});
