import {Person} from './person.js';
import {sayHello} from './functions.js';

const p = new Person("Peter", 24);
sayHello(p.name);