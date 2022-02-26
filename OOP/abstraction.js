function constructorPattern(height, width) {
    this.height = height;
    this.width = width;
    var positon = {
        x: 20,
        y: 25
    }
    var peringProperties = function () {
        console.log('Width: ' + this.width)
        console.log('Heidht: ' + this.height)
    }.bind(this);

    this.draw = function () {
        console.log('This is a Ractangle');
        peringProperties();
        console.log('X-Axis: ' + positon.x + " Y-Axis: " + positon.y);
    }
}

var rec1 = new constructorPattern(10, 20);
rec1.draw();