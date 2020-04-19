var add = function (x, y, z) {
    if (z === void 0) { z = 10; }
    if (typeof z === 'number') {
        return x + y + z;
    }
    else {
        return x + y;
    }
};
var result = add(2, 3, 5);
var add2 = add;
