var main = new Vue({
	el: '#main',
	data: {
		data: [],
		map: [],
		team: [],
		schedule: [],
		chat: [],
		locations: [],
		currentMap: false,
		currentSchedule: false,
		currentChat: false,
		currentTeam: false,
		main:true,
		showTeamInfo: false,
		teamNumber: -1,
        shwbtn:true,
//        loading:true,
	},
	created: function () {
		this.start();
	},
	methods: {
		start: function () {
			var fetchConfig =
				fetch("https://api.myjson.com/bins/8sxd0", {
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
//                    main.loading=false;
                    
                    

        
				})
				.catch(function (error) {
					console.log(error);
				})
		},
//		showTeamInfo: function () 
//		{
//			for (var i = 0; i<schedule.length; i++)
//				{
//					if(schedule.september[i].host == U1 || schedule.september[i].visitor == U1 )
//					{	
//						this.september = this.schedule.september[i].host;
//					    this.september = this.schedule.september[i].visitor;
//					   console.log(main.september);
//					}
//					 if(schedule.october.host== U1 || schedule.october.visitor == U1)  
//						 {
//							 main.october = data.schedule.october.host;
//							 main.october = data.schedule.october.visitor;
//						 console.log(main.october);
//						 }
//				}
//				
//			     if (this.teamNumber== -1 && this.showTeamInfo==false){
        // this.teamNumber=ind;
        // this.showTeamInfo=true
         
    // }
     //else 
//        if (this.teamNumber== ind && this.showTeamInfo==true){
//         this.showTeamInfo=false
//     }
//     else{ },
////			
//		},
 showteam:function(ind){

         this.showTeamInfo=true;
         this.shwbtn=false;
         this.teamNumber=ind
     },
//        back:function()
//        {
//            this.showTeamInfo=false;
//            this.shwbtn=true;
//            this.teamNumber=0;
//        }

	},

})
