class crossOriginLoadImages {

  constructor(target, url) {

    this.target = target;
    this.url = url;
    this.img = new Image();

    this.init();

  }

  init() {

    const cb = () => this.onLoad();
    this.img.crossOrigin = 'Anonymous';
    this.img.addEventListener('load', cb, false);
    this.img.src = this.url;

  }

  onLoad() {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = this.img.width;
    canvas.height = this.img.height;

    context.drawImage(this.img, 0, 0);
    this.target.appendChild(canvas);

  }

}

export default crossOriginLoadImages
