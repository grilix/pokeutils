define(function () {
  var Stats = function (stats) {
    stats = stats || {};

    this.hp = stats.hp;
    this.attack = stats.attack;
    this.defense = stats.defense;
    this.specialAttack = stats.specialAttack;
    this.specialDefense = stats.specialDefense;
    this.speed = stats.speed;
  };

  Stats.MAX = 31;
  Stats.MIN = 0;

  return Stats;
});
