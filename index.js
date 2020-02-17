const Chain = callback => {
  var queue = [];

  function _next() {
    var cb = queue.shift();
    if (cb) {
      cb(_next);
    }
  }

  setTimeout(_next, 0);

  var then = function(cb) {
    queue.push(cb);
    return { then: then };
  };

  return then(callback);
};

// Test

Chain(next => {
  setTimeout(() => {
    console.log(1);
    next();
  }, 300);
})
  .then(next => {
    setTimeout(() => {
      console.log(2);
      next();
    }, 300);
  })
  .then(next => {
    setTimeout(() => {
      console.log(3);
      next();
    }, 300);
  });
