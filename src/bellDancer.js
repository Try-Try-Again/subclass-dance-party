var BellDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.rotation = 0;

  this.$node = $('<span class="bellDancer"></span>');

};

//inherit prototypes from parent
BellDancer.prototype = Object.create(Dancer.prototype);
//correct contstructor
BellDancer.prototype.contstructor = BellDancer;

BellDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  this.rotation += 10;
  if (this.rotation > 50) { this.rotation = -50; }
  this.styleSettings.transform = 'rotateX(' + this.rotation + 'deg)';
  this.$node.css(this.styleSettings);
};