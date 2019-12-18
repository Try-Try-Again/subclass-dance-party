var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

//inherit prototypes from parent
BlinkyDancer.prototype = Object.create(Dancer.prototype);
//correct contstructor
BlinkyDancer.prototype.contstructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // Object.getPrototypeOf(this).step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('in BDS');
  this.styleSettings.top = this.top;
  this.styleSettings.left = this.left;
  if (this.lineUpMode) {
    this.lineUp();
  }

  this.$node.css(this.styleSettings);

  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {
  this.styleSettings.top = this.top = 75;
};