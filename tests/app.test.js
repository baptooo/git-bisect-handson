const app = require('../src/app');

describe('App', () => {
  describe('some', () => {
    it('should return 1 + 2 = 3', () => {
      const result = app.some(1, 2);

      expect(result).toEqual(3);
    })

    it('should ensure arguments are numbers', () => {
      const result = () => app.some('foo', 4);

      expect(result).toThrow();
    })
  })

  describe('sayHello', () => {
    it('should return Hello !', () => {
      const result = app.sayHello();

      expect(result).toEqual('Hello !');
    })
  })

  describe('isPalindrome', () => {
    it('should return true for abba', () => {
      const result = app.isPalindrome('abba');

      expect(result).toEqual(true);
    })

    it('should return false for []', () => {
      const result = app.isPalindrome('[]');

      expect(result).toEqual(false);
    })
  })
})
