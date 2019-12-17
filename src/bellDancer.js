var BellDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="bellDancer"></span>');

};

//inherit prototypes from parent
BellDancer.prototype = Object.create(Dancer.prototype);
//correct contstructor
BellDancer.prototype.contstructor = BellDancer;

BellDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

};