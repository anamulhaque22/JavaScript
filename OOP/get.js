function constructorPattern(height, width) {
    this.height = height;
    this.width = width;

    var properties = {
        x: 5,
        y: 20
    }
    // to get the attribute
    //but there are some problem. this way get method not able to fullfill get method vehavior.
    // get method return a attribute that just read only but here getPosition method return attribute that is read and write able
    this.getPosition = function () {
        return properties;
    }
    var peringProperties = function () {
        console.log('Width: ' + this.width)
        console.log('Heidht: ' + this.height)
    }.bind(this);

    this.draw = function () {
        console.log('Thsi is a Reactangle.');
        peringProperties();
        console.log('X-Axis: ' + positon.x + " Y-Axis: " + positon.y);
    }
}
const rec1 = new constructorPattern(10, 25);
let anotherPosition = rec1.getPosition();
anotherPosition.x = 100;
console.log(rec1.getPosition());