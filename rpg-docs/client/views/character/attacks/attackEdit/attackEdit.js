var damageTypes = ["bludgeoning", "piercing", "slashing", "acid", "cold", "fire", "force", "lightning", "necrotic", 
				  "poison", "psychic", "radiant", "thunder"];

Template.attackEdit.events({
	"tap #deleteAttack": function(event, instance){
		Attacks.remove(this._id);
	},
	"change #attackBonusInput": function(event){
		var value = event.currentTarget.value;
		Attacks.update(this._id, {$set: {attackBonus: value}});
	},
	"change #damageInput": function(event){
		var value = event.currentTarget.value;
		Attacks.update(this._id, {$set: {damageBonus: value}});
	},
	"change #detailInput": function(event){
		var value = event.currentTarget.value;
		Attacks.update(this._id, {$set: {details: value}});
	},
	"core-select #damageTypeDropdown": function(event){
		var detail = event.originalEvent.detail;
		if(!detail.isSelected) return;
		var value = detail.item.getAttribute("name");
		if(value == this.damageType) return;
		Attacks.update(this._id, {$set: {damageType: value}});
	},
	"core-select #damageDiceDropdown": function(event){
		var detail = event.originalEvent.detail;
		if(!detail.isSelected) return;
		var value = detail.item.getAttribute("name");
		if(value == this.damageDice) return;
		Attacks.update(this._id, {$set: {damageDice: value}});
	}
});

Template.attackEdit.helpers({
	damageTypes: function(){
		return damageTypes;
	},
	DAMAGE_DICE: function(){
		return DAMAGE_DICE;
	}
});