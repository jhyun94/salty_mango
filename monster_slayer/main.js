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
		restart(){
			this.playerLife = 100;
			this.monsterLife = 100;
			this.start = false;
		},
		generateGeneral(){
			return Math.floor(Math.random() * 10) + 1;
		},
		generateSpecial(){
			return Math.floor(Math.random() * 20) + 1;
		}
	}
})