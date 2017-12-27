new Vue({
	el: "#root",
	data: {
		playerLife: 100,
		monsterLife: 100,
		start: false
	},
	methods: {
		attack(){
			this.playerLife = this.playerLife - this.generateAttack();
			this.monsterLife = this.monsterLife - this.generateAttack();
		},
		specialAttack(){
			this.playerLife = this.playerLife - this.generateAttack();
			this.monsterLife = this.monsterLife - this.generateSpecial();
		},
		heal(){
			this.playerLife = this.playerLife + this.generateAttack();
			this.playerLife = this.playerLife - this.generateAttack();
		}
		generateGeneral(){
			return Math.floor(Math.random() * 11);
		},
		generateSpecial(){
			return Math.floor(Math.random() * 21);
		}
	}
})