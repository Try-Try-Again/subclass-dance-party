var SpazzDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="spazzDancer"></span>');

};

//inherit prototypes from parent
SpazzDancer.prototype = Object.create(Dancer.prototype);
//correct contstructor
SpazzDancer.prototype.contstructor = SpazzDancer;

SpazzDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  this.top = Math.max(0, this.top + 10 - Math.floor(20 * Math.random()));
  this.left = Math.max(0, this.left + 10 - Math.floor(20 * Math.random()));
  this.setPosition(this.top, this.left);
};
