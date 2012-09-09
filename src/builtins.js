bilby = bilby
    .method('>=', isArray, function(a, b) {
        var accum = [],
            i;

        for(i = 0; i < a.length; i++) {
            accum = accum.concat(b(a[i]));
        }

        return accum;
    })
    .method('>', isArray, function(a, b) {
        var accum = [],
            i;

        for(i = 0; i < this.length; i++) {
            accum[i] = b(this[i]);
        }

        return accum;
    })
    .method('*', isArray, function(a, b) {
        var accum = [],
            i,
            j;

        for(i = 0; i < a.length; i++) {
            for(j = 0; j < b.length; j++) {
                accum.push(a[i](b[j]));
            }
        }

        return accum;
    })
    .method('+', isArray, function(a, b) {
        return a.concat(b);
    })
    .method('+', isNumber, function(a, b) {
        return a + b;
    })
    .method('+', isString, function(a, b) {
        return a + b;
    })
    .method('>>', isFunction, function(a, b) {
        var env = this;
        return function(x) {
            return env['>='](a(x), b);
        };
    });

Do.setValueOf(Array.prototype);
Do.setValueOf(Function.prototype);