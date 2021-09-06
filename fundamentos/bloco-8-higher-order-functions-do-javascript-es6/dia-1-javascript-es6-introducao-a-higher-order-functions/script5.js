const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = battleMembers.dragon.strength;
const damageWarrior = battleMembers.warrior.strength;
const damageWarriorWeapon = battleMembers.warrior.weaponDmg * damageWarrior;

const valueDamage = (force) => {
  if (force === damageDragon) { 
  const randomNum = Math.floor(Math.random() * (force - 15)) + 15;
  return `${randomNum} Dragon`
  }
  else (force === damageWarrior)
  const randomNum = Math.floor(Math.random() * (damageWarriorWeapon - force)) + force;
  return `${randomNum} Warrior`
}

console.log(valueDamage(damageWarrior))


