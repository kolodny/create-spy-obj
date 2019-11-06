import {createSpyObj} from '../';


describe('createSpyObj', () => {
  describe('works on concerte classes', () => {
    class MyService {
      method() {
        return 'test';
      }
      propMethod = () => 123;
    }
    
    it('works on methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.method.and.returnValue('bar');
      expect(spyObj.method()).toBe('bar');
    });
  
    it('works on property methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.propMethod.and.returnValue(456);
      expect(spyObj.propMethod()).toBe(456);
    });
  });

  describe('works on abstract classes', () => {
    abstract class MyService {
      abstract method(): string;
      abstract propMethod: () => number;
    }
    
    it('works on methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.method.and.returnValue('bar');
      expect(spyObj.method()).toBe('bar');
    });
  
    it('works on property methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.propMethod.and.returnValue(456);
      expect(spyObj.propMethod()).toBe(456);
    });
  });

  describe('works on interfaces', () => {
    interface MyService {
      method(): string;
      propMethod: () => number;
    }
    
    it('works on methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.method.and.returnValue('bar');
      expect(spyObj.method()).toBe('bar');
    });
  
    it('works on property methods', () => {
      const spyObj = createSpyObj<MyService>();
      spyObj.propMethod.and.returnValue(456);
      expect(spyObj.propMethod()).toBe(456);
    });
  });
});
