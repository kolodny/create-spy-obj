import 'jasmine';

type Constructor<T> = Function & {prototype: T};

export function createSpyObj<T>(): jasmine.SpyObj<T>;
export function createSpyObj<T extends Constructor<any>>(): T extends Constructor<infer U> ? jasmine.SpyObj<U> : never;
export function createSpyObj<T = {}>(): jasmine.SpyObj<T> {
  return new Proxy({}, {
    get(target: Record<string, jasmine.Spy>, key: string) {
      if (!target[key]) {
        target[key] = jasmine.createSpy('SpyObj.' + key);
      }
      return target[key];
    }
  }) as any
}
