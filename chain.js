const Chain = callback => {
  var queue = [];

  var _next = () => {
    var cb = queue.shift();
    if (cb) {
      cb(_next);
    }
  };

  setTimeout(_next, 0);

  var then = cb => {
    queue.push(cb);
    return { then: then };
  };

  return then(callback);
};

export default Chain;
