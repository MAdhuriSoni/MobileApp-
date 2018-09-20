var main = new Vue({
	el: '#main',
	data: {
		map: [],
		team: [],
		schedule: [],
		chat: [],
		locations: [],
		currentMap: false,
		currentSchedule: false,
		currentChat: false,
		currentTeam: false
	},
	created: function () {
		this.start();
	},
	methods: {
		start: function () {
			var fetchConfig =
				fetch("https://api.myjson.com/bins/bpmng", {
					method: "GET",
				}).then(function (response) {
					if (response.ok) {
						return response.json();
					}
				}).then(function (json) {

					var data = json;
					console.log(data);
					main.locations = data.schedule.locations;
					console.log(main.locations);
					main.team = data.schedule.teams;
					console.log(main.team);
					main.schedule = data.schedule;
					console.log(main.schedule);



				})
				.catch(function (error) {
					console.log(error);
				})
		},

	},

})
