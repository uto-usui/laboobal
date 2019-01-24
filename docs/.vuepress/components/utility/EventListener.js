class eventManager {

  /**
   * add event listener
   * create remover list
   *
   * @param target {Object}
   * @param eventType {String}
   * @param callback {Function}
   */
  constructor(target, eventType, callback) {

    this.target = target;
    this.eventType = eventType;

    this.listen(callback);

  }

  listen(callback) {

    // create list
    if (!this._eventRemovers) {
      this._eventRemovers = [];
    }

    // add
    this.target.addEventListener(this.eventType, callback);

    const _this = this;

    // push remove method
    this._eventRemovers.push({
      remove() {
        _this.target.removeEventListener(_this.eventType, callback);
      },
    });

  }

  destroy() {

    if (this._eventRemovers) {

      // all items removeEventListener
      this._eventRemovers.forEach((eventRemover) => {
        eventRemover.remove();
      });

//      console.log('destroy', this.target, this.eventType);

    }

  }

}

export default eventManager;
