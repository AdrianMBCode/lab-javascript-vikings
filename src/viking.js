// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage;
    }     
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;
    }

    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        if (damage >= this.health) {
            return `${this.name} has died in act of combat`;
        }
        this.health -= damage;
        return `${this.name} has received ${damage} points of damage`;
    }
    battleCry () {
        return `Odin Owns You All!`;
    }
           
}   

// Saxon
class Saxon extends Soldier {
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        if (damage >= this.health){
            return `A Saxon has died in combat`;
        }
        this.health -= damage;
        return `A Saxon has received ${damage} points of damage`;
    }
    

}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)

}
    vikingAttack() {
        let randomViking = Math.floor (math.random()* this.vikingArmy.length);
        let randomSaxon = math.floor(math.random()* this.saxonArmy.length);

}
    saxonAttack() {}
    showStatus() {}
}
