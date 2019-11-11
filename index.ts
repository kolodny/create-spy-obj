import 'jasmine';

type Constructor<T> = Function & {prototype: T};

export function createSpyObj<T>(): jasmine.SpyObj<T>;
export function createSpyObj<T extends Constructor<any>>(): T extends Constructor<infer U> ? jasmine.SpyObj<U> : never;
export function createSpyObj<T>(cls: Constructor<T>): jasmine.SpyObj<T>;
export function createSpyObj<T = {}>(cls?: Constructor<T>): jasmine.SpyObj<T> {
  const name = cls ? cls.name : 'spyObj';
  return new Proxy({}, {
    get(target: Record<string, jasmine.Spy>, key: string) {
      if (typeof key === 'string') {
        if (!target[key]) {
          target[key] = jasmine.createSpy(`${name}.${key}`);
        }
        return target[key];
      }
      return `jasmine.SpyObj<${name}>`;
    }
  }) as any;
}
