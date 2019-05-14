import {observable, computed, asStructure} from 'mobx';

export class Cart {
    items = observable([1, 2, 3]);
}