app.filter('kebab', function () {
  return function (input) {
    if (typeof input === 'number') {
      return input;
    }
    var output = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i] === '_') {
        output.push('-');
      } else {
        output.push(input[i]);
      }
    }
    return output.join('');
  };
});
app.filter('commaSeparated',function() {
  return function(input) {
    console.log(input);
    console.log('filter');
    return input;
  };
});
