new Vue({
	el: "#root",
	data: {
		playerLife: 100,
		monsterLife: 100,
		start: false
	},
	methods: {
		attack(){
			this.playerLife = this.playerLife - this.generateGeneral();
			this.monsterLife = this.monsterLife - this.generateGeneral();
		},
		specialAttack(){
			this.playerLife = this.playerLife - this.generateGeneral();
			this.monsterLife = this.monsterLife - this.generateSpecial();
		},
		heal(){
			this.playerLife = this.playerLife + this.generateGeneral();
			this.playerLife = this.playerLife - this.generateGeneral();
		},
		generateGeneral(){
			return Math.floor(Math.random() * 10) + 1;
		},
		generateSpecial(){
			return Math.floor(Math.random() * 20) + 1;
		}
	}
})