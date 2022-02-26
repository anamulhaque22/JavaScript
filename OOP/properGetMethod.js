function constructorPattern(height, width) {
    this.height = height;
    this.width = width;
    let positon = {
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

    Object.defineProperty(this, 'positionProperty', {
        get: function () {
            return positon;
        }
    });
}

var rec1 = new constructorPattern(10, 20);
console.log(rec1.height);
console.log(rec1.positon)