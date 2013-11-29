define(['stats'], function (Stats) {
  var StatsResults = function (table) {
    this._table = table;
  };

  StatsResults.prototype._addRow = function (row) {
    this._table.appendChild(row);
    row.scrollIntoViewIfNeeded();
  };

  StatsResults.prototype.addResults = function (stats) {
    var row = StatsResults.createStatsRow(stats);

    this._addRow(row);
  };

  StatsResults.prototype.addMark = function () {
    var row = document.createElement('tr');
    var cell = document.createElement('td');

    cell.colSpan = 6;
    cell.innerHTML = '&nbsp;';
    row.appendChild(cell);
    row.className = 'mark';

    this._addRow(row);
  };

  StatsResults.createStatsRow = function (stats) {
    var tr = document.createElement('tr');
    var classes = [];
    var statMap = {
      'hp': 'hp',
      'attack': 'attack',
      'defense': 'defense',
      'special-attack': 'specialAttack',
      'special-defense': 'specialDefense',
      'speed': 'speed'
    };

    var createCell = function (name) {
      var td = document.createElement('td');
      var statValue = stats[statMap[name]];

      td.className = name;

      if (statValue == Stats.MAX) {
        classes.push(name);
        td.innerHTML = '&nbsp;';
      } else if (statValue == Stats.MIN) {
        classes.push('no-' + name);
        td.innerHTML = '&nbsp;';
      }

      tr.appendChild(td);
    };

    createCell('hp');
    createCell('attack');
    createCell('defense');
    createCell('special-attack');
    createCell('special-defense');
    createCell('speed');

    tr.className = classes.join(' ');

    return tr;
  };

  return StatsResults;
});
