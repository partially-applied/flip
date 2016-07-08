var innerFlip, coreFlip, flip, slice$ = [].slice;
innerFlip = function(argv, f){
  return function(){
    var i$, ref$, len$, I;
    for (i$ = 0, len$ = (ref$ = slice$.call(arguments)).length; i$ < len$; ++i$) {
      I = ref$[i$];
      argv.push(I);
    }
    return coreFlip(f, argv);
  };
};
coreFlip = function(f, argv){
  if (f.length === argv.length) {
    return f.apply(null, argv.reverse());
  } else {
    return innerFlip(argv, f);
  }
};
flip = function(f){
  var argv;
  argv = [];
  if (arguments.length > 1) {
    argv = slice$.call(slice$.call(arguments), 1, (arguments.length - 1) + 1 || 9e9);
  }
  return coreFlip(f, argv);
};
module.exports = flip;