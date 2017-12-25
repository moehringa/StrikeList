import meteor from 'meteor/meteor';

// Define a collection that uses `Animal` as its document.
const Animals = new Mongo.Collection('animals', {
    transform: (doc) => new Animal(doc)
});
// Create an animal and call its `makeNoise` method.
Animals.insert({ name: 'raptor', sound: 'roar' });
Animals.findOne({ name: 'raptor' }).makeNoise(); // Prints 'roar'

class Item {
    
    constructor(name, handler, points){
        this._handler = handler;
        this._points = points;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get handler() {
        return this._handler;
    }

    set handler(value) {
        this._handler = value;
    }

    get points() {
        return this._points;
    }

    set points(value) {
        this._points = value;
    }
}


