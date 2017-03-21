var bossInitialStats = {
  'hp':100,
  'armor':2,
  'damage':8
}

var heroInitialStats = {
  'hp':100,
  'armor':0,
  'damage':0
}

var weapons = [
  { 'name':'Dagger', 'cost': 8, 'damage': 4, 'armor': 0},
  { 'name':'Shortsword', 'cost': 10, 'damage': 5, 'armor': 0},
  { 'name':'Warhammer', 'cost': 25, 'damage': 6, 'armor': 0},
  { 'name':'Longsword', 'cost': 40, 'damage': 7, 'armor': 0},
  { 'name':'Greataxe', 'cost': 74, 'damage': 8, 'armor': 0}];

var armors = [
  { 'name':'Nothing', 'cost':0, 'damage':0, 'armor':0},
  { 'name':'Leather', 'cost':13, 'damage':0, 'armor':1},
  { 'name':'Chainmail', 'cost':31, 'damage':0, 'armor':2},
  { 'name':'Splintmail', 'cost':53, 'damage':0, 'armor':3},
  { 'name':'Bandedmail', 'cost':75, 'damage':0, 'armor':4},
  { 'name':'Platemail', 'cost':102, 'damage':0, 'armor':5}];

var rings = [
  {'name':'No Ring', 'cost':0,'damage':0, 'armor':0},
  {'name':'No Ring 2', 'cost':0,'damage':0, 'armor':0},
  {'name':'Damage +1', 'cost':25,'damage':1, 'armor':0},
  {'name':'Damage +2', 'cost':50,'damage':2, 'armor':0},
  {'name':'Damage +3', 'cost':100,'damage':3, 'armor':0},
  {'name':'Defense +1', 'cost':20,'damage':0, 'armor':1},
  {'name':'Defense +2', 'cost':40,'damage':0, 'armor':2},
  {'name':'Defense +3', 'cost':80,'damage':0, 'armor':3}];

function isHeroWinBattle(bossStats, heroStats) {
  var bossHP = bossStats.hp;
  var heroHP = heroStats.hp;
  while (bossHP > 0 && heroHP > 0) {
    bossHP -= Math.max(heroStats.damage - bossStats.armor, 1);
    heroHP -= Math.max(bossStats.damage - heroStats.armor, 1) 
  }
  return bossHP <= 0;
}

var lowCost = 999999;

weapons.forEach(function(weapon) {
  armors.forEach(function(armor) {
    rings.forEach(function(ring1) {
      rings.forEach(function(ring2) {
        if (ring1 != ring2) {
          var heroStats = {
            'hp': heroInitialStats.hp,
            'damage': heroInitialStats.damage + weapon.damage + armor.damage + ring1.damage + ring2.damage,
            'armor' : heroInitialStats.armor + weapon.armor + armor.armor + ring1.armor + ring2.armor
          };
          var cost = weapon.cost + armor.cost + ring1.cost + ring2.cost;
          lowCost = isHeroWinBattle(bossInitialStats, heroStats) && cost < lowCost ? cost : lowCost;
        }
      });
    });
  });
});

console.log(lowCost);