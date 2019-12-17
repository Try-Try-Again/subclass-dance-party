describe('bellDancer', function() {

  var bellDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bellDancer = new BellDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bellDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bellDancer, 'step');
      expect(bellDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bellDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bellDancer.step.callCount).to.be.equal(2);
    });

    it('should rotate', function() {
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(bellDancer.rotation).to.be.equal(20);
    });

  });

});