describe('spazzDancer', function() {

  var spazzDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spazzDancer = new SpazzDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spazzDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spazzDancer, 'step');
      expect(spazzDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spazzDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spazzDancer.step.callCount).to.be.equal(2);
    });

    it('should move', function() {
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(spazzDancer.top).to.be.not.equal(10);
      expect(spazzDancer.left).to.be.not.equal(20);
    });

  });

});