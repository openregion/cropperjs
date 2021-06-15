describe('fitCanvasOnRotate (option)', () => {
  it('should not fit canvas on rotate by default', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      ready() {
        done();
      },
    });

    expect(cropper.options.fitCanvasOnRotate).to.be.false;
  });

  it('should fit canvas on rotate', (done) => {
    const image = window.createImage();
    const cropper = new Cropper(image, {
      fitCanvasOnRotate: true,
      ready() {
        done();
      },
    });

    expect(cropper.options.fitCanvasOnRotate).to.be.true;
  });
});
