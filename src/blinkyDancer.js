var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //magic this = Object.create(makeBlinkyDancer.prototype)
  makeDancer.call(this, top, left, timeBetweenSteps);
  //magic return this
};

//inherit prototypes from parent
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
//correct contstructor
makeBlinkyDancer.prototype.contstructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
