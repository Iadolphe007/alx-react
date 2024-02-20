const {List} = require('immutable');

export function getListObject(array) {
    return List(array);
}
export function addElementToList(list, element) {
    list = List(list);
    const list1 = list.push(element);
    return (list1.toArray());
}
