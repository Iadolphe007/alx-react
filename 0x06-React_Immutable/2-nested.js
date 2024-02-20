const { Map, List } = require('immutable');

export default function accessImmutableObject(object, array) {
    object = Map(object);
    array = List(array);
    return(object.getIn(array));
}
