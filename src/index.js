import '@babel/polyfill';
import { sayHello } from './module';

const obj = {
  foo: true,
  bar: false
};

Object.keys(obj)
  .filter((key) => obj[key])
  .map((key) => key[0].toUpperCase() + key.substr(1))
  .forEach((key) => sayHello(key));
