define(['views/helper', 'stats'], function (helper, Stats) {
  var StatsForm = function (el) {
    var _this = this;
    this._el = el;
    this._stats = {};

    helper.selectEach(this._el, '.stat', function (stat) {
      stat.addEventListener('click', function (event) {
        _this.clickStatElement(stat);
      }, false);

      stat.addEventListener('keypress', function (event) {
        if (event.which === helper.KEY_SPACE) {
          _this.clickStatElement(stat);
        } else if (event.which === helper.KEY_ENTER) {
          _this.addStats();
        }
      }, false);
    });

    el.querySelector('.add').addEventListener('click', function (event) {
      _this.addStats();
    }, false);
  };

  StatsForm.prototype.statNameForElement = function (element) {
    var regex =
      /(?:^|\s)(hp|attack|defense|special-attack|special-defense|speed)(?:$|\s)/;

    return element.className.match(regex)[1];
  };

  StatsForm.prototype.clickStatElement = function (element) {
    var statName = this.statNameForElement(element)

    element.classList.toggle('active');

    if (this._stats[statName] == Stats.MAX) {
      this._stats[statName] = void{};
    } else {
      this._stats[statName] = Stats.MAX;
    }
  };

  StatsForm.prototype.reset = function () {
    this._stats = {};

    helper.selectEach(this._el, '.active', function (active) {
      active.classList.remove('active');
    });
  };

  StatsForm.prototype.isEmpty = function () {
    for (var k in this._stats) {
      if (this._stats[k]) {
        return false;
      }
    }

    return true;
  };

  StatsForm.prototype.addStats = function () {
    var stats, event;

    if (this.isEmpty()) {
      return;
    }

    stats = {
      hp: this._stats['hp'],
      attack: this._stats['attack'],
      defense: this._stats['defense'],
      specialAttack: this._stats['special-attack'],
      specialDefense: this._stats['special-defense'],
      speed: this._stats['speed']
    };
    event = new CustomEvent('statsavailable', { 'detail': stats });

    this._el.dispatchEvent(event);
    this.reset();
  };

  return StatsForm;
});
