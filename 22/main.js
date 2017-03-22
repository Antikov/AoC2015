var bossInitialStats = {
  'hp':51,
  'damage':9
};

var heroInitialStats = {
  'hp':50,
  'armor':0,
  'mana':500
};


var initialBuffs = {
  'shield':0,
  'poison':0,
  'recharge':0
};

var spellsManaCost = {'Magic Missile':53, 'Drain':73, 'Shield':113, 'Poison':173, 'Recharge':229};

var spendManaMin = 9999999;

function bossIsDead(bossStats) {
  return bossStats.hp <= 0;
}

function heroIsDead(heroStats) {
  return heroStats.hp <= 0;
}

function applyBuffs(bossStats, heroStats, buffs) {
  if (buffs.shield) {
    buffs.shield--;
    heroStats.armor = 7;
  } else {
    heroStats.armor = 0;
  }
  
  if (buffs.poison) {
    buffs.poison--;
    bossStats.hp -= 3;
  }
  if (buffs.recharge) {
    buffs.recharge--;
    heroStats.mana += 101;
  }
}

function isMakeSenseToFight(spendMana) {
  return spendMana <= spendManaMin;
}

function oneTurn(bossInitialStats, heroInitialStats, Initialbuffs, spendMana, heroTurn) {

  var bossStats = Object.assign({}, bossInitialStats);
  var heroStats = Object.assign({}, heroInitialStats);
  var buffs = Object.assign({}, Initialbuffs);

//  console.log(bossStats, heroStats, buffs, spendMana, heroTurn);
  
  if (!isMakeSenseToFight(spendMana)) {
    return;
  }

  applyBuffs(bossStats, heroStats, buffs);
  
  if (bossIsDead(bossStats)) {
    spendManaMin = spendManaMin > spendMana ? spendMana : spendManaMin;
    return;
  }
  
  if (heroIsDead(heroStats)) {
    return;
  }

  if (heroTurn) {
    Object.keys(spellsManaCost).forEach(function(spellName) {
      if (spellName == "Magic Missile" && heroStats.mana >= spellsManaCost[spellName]) {
        heroStats.mana -= spellsManaCost[spellName];
        bossStats.hp -= 4;
        oneTurn(bossStats, heroStats, buffs, spendMana + spellsManaCost[spellName], false);
        bossStats.hp += 4;
        heroStats.mana += spellsManaCost[spellName];
      }
      if (spellName == "Drain" && heroStats.mana >= spellsManaCost[spellName]) {
        heroStats.mana -= spellsManaCost[spellName];
        bossStats.hp -= 2;
        heroStats.hp += 2;
        oneTurn(bossStats, heroStats, buffs, spendMana + spellsManaCost[spellName], false);
        bossStats.hp += 2;
        heroStats.hp -= 2;
        heroStats.mana += spellsManaCost[spellName];
      }
      if (spellName == "Shield" && heroStats.mana >= spellsManaCost[spellName] && !buffs.shield) {
        heroStats.mana -= spellsManaCost[spellName];
        buffs.shield = 6;
        oneTurn(bossStats, heroStats, buffs, spendMana + spellsManaCost[spellName], false);
        buffs.shield = 0;
        heroStats.mana += spellsManaCost[spellName];
      }
      if (spellName == "Poison" && heroStats.mana >= spellsManaCost[spellName] && !buffs.poison) {
        heroStats.mana -= spellsManaCost[spellName];
        buffs.poison = 6;
        oneTurn(bossStats, heroStats, buffs, spendMana + spellsManaCost[spellName], false);
        buffs.poison = 0;
        heroStats.mana += spellsManaCost[spellName];
      }
      if (spellName == "Recharge" && heroStats.mana >= spellsManaCost[spellName] && !buffs.recharge) {
        heroStats.mana -= spellsManaCost[spellName];
        buffs.recharge = 5;
        oneTurn(bossStats, heroStats, buffs, spendMana + spellsManaCost[spellName], false);
        buffs.recharge = 0;
        heroStats.mana += spellsManaCost[spellName];
      }
    });
    
  } else {
    heroStats.hp -= Math.max(bossStats.damage - heroStats.armor,1);
    if (heroIsDead(heroStats)) {
      return;
    } else {
      oneTurn(bossStats, heroStats, buffs, spendMana, true);
    }
  }
}

oneTurn(bossInitialStats, heroInitialStats, initialBuffs, 0, true);

console.log(spendManaMin);