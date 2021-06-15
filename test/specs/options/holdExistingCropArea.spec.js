describe('holdExistingCropArea (option)', () => {
  it('should not hold crop area by default', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      ready() {
        done();
      },
    });

    expect(cropper.options.holdExistingCropArea).to.be.false;
  });

  it('should hold existing crop area', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      holdExistingCropArea: true,
      ready() {
        done();
      },
    });

    expect(cropper.options.holdExistingCropArea).to.be.true;
  });
});
