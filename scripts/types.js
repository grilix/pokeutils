var Type = function (name, effectiveness) {
  this.name = name;
  this.effectiveness = effectiveness;
};
Type.all = {};

Type.define = function (name, effectiveness) {
  var effectivenessMap = this.parseEffectivenessDefinition(effectiveness);
  // this.set(name, effectivenessMap);
  this.set(name, new Type(name, effectivenessMap));
};

Type.parseEffectivenessDefinition = function (definition) {
  var effectivenessMap = {};

  for (var number in effectivenessMap) {
    var types = effectivenessMap[number];

    for (var index in types) {
      effectivenessMap[types[index]] = parseInt(number, 10);
    }
  }

  return effectivenessMap;
};

Type.set = function (name, type) {
  this.all[name] = type;
};

Type.get = function (name) {
  return this.all[name];
}

Type.prototype.effectivenessAgainst = function (name) {
  if (name in this.effectiveness) {
    return this.effectiveness[name];
  }

  return 1;
};

Type.define('bug', {
  2: ['psychic', 'grass', 'dark' ],
  0.5: [ 'fighting', 'fire', 'flying', 'ghost', 'poison', 'steel', 'fairy' ]
});
Type.define('dark', {
  2: [ 'ghost', 'psychic' ],
  0.5: [ 'dark', 'fighting', 'fairy' ]
});
Type.define('dragon', {
  2: [ 'dragon' ],
  0.5: [ 'steel' ],
  0: [ 'fairy' ]
});
Type.define('electric', {
  2: [ 'flying', 'water' ],
  0.5: [ 'dragon', 'electric', 'grass' ],
  0: [ 'ground' ]
});
Type.define('fairy', {
  2: [ 'dark', 'dragon', 'fighting' ],
  0.5: [ 'fire', 'poison', 'steel' ]
});
Type.define('fighting', {
  2: [ 'dark', 'ice', 'normal', 'rock', 'steel' ],
  0.5: [ 'bug', 'fairy', 'flying', 'poison', 'psychic' ],
  0: [ 'ghost' ]
});
Type.define('fire', {
  2: [ 'bug', 'grass', 'ice', 'steel' ],
  0.5: [ 'dragon', 'fire', 'rock', 'water' ]
});
Type.define('flying', {
  2: [ 'bug', 'fighting', 'grass' ],
  0.5: [ 'electric', 'rock', 'steel' ]
});
Type.define('ghost', {
  2: [ 'ghost', 'psychic' ],
  0.5: [ 'dark' ],
  0: [ 'normal' ]
});
Type.define('grass', {
  2: [ 'ground', 'rock', 'water' ],
  0.5: [ 'bug', 'dragon', 'fire', 'flying', 'grass', 'poison', 'steel' ]
});
Type.define('ground', {
  2: [ 'electric', 'fire', 'poison', 'rock', 'steel' ],
  0.5: [ 'bug', 'grass' ]
});
Type.define('ice', {
  2: [ 'dragon', 'flying', 'grass', 'ground' ],
  0.5: [ 'fire', 'ice', 'steel', 'water' ]
});
Type.define('normal', {
  0.5: [ 'rock', 'steel' ],
  0: [ 'ghost' ]
});
Type.define('poison', {
  2: [ 'grass', 'fairy' ],
  0.5: [ 'ghost', 'ground', 'poison', 'rock' ],
  0: [ 'steel' ]
});
Type.define('psychic', {
  2: [ 'fighting', 'poison' ],
  0.5: [ 'psychic', 'steel' ],
  0: [ 'dark' ]
});
Type.define('rock', {
  2: [ 'bug', 'fire', 'flying', 'ice' ],
  0.5: [ 'fighting', 'ground', 'steel' ]
});
Type.define('steel', {
  2: [ 'fairy', 'ice', 'rock' ],
  0.5: [ 'electric', 'fire', 'steel', 'water' ]
});
Type.define('water', {
  2: [ 'fire', 'ground', 'rock' ],
  0.5: [ 'dragon', 'grass', 'water' ]
});
