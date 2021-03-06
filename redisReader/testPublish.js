var redis=require('redis');
var client=redis.createClient('6379','127.0.0.1');
client.on('error',function(error){
	console.log(error);
});
//set
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.set('str_key_0','0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//get
// client.select('15',function(error){
// 	if(error){
// 		console.log(error);
// 	}else{
// 		client.get('str_key_0',function(error,res){
// 			if(error){
// 				console.log(error);
// 			}else{
// 				console.log(res);
// 			}
// 			client.end();
// 		});
// 	}
// });
//publish.js

var NewYork={
	name:'New York',
	data:[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5],
	categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
	};
var Berlin={
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6,17.9, 14.3, 9.0, 3.9, 1.0],
            categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
        };
var London={
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0,16.6, 14.2, 10.3, 6.6, 4.8],
            categories:['一月', '二月', '三月', '四月', '五月', '六月' ,'七月', '八月', '九月', '十月', '十一月', '十二月']
        };
 var pushcolum={
 	name: 'Population',
             data: [
                ['Shanghai', 23.7],
                ['Lagos', 16.1],
                ['Instanbul', 14.2],
                ['Karachi', 14.0],
                ['Mumbai', 12.5],
                ['Moscow', 12.1],
                ['São Paulo', 11.8],
                ['Beijing', 11.7],
                ['Guangzhou', 11.1],
                ['Delhi', 11.1],
                ['Shenzhen', 10.5],
                ['Seoul', 10.4]
            ]
 }

client.on('ready',function  (error) {
	if (error) {
		console.log(error);
	}else{
		var interval=setInterval(function  () {
			client.publish('pushline_NewYork',JSON.stringify(NewYork));
			client.publish('pushline_Berlin',JSON.stringify(Berlin));
			client.publish('pushline_London',JSON.stringify(London));
			client.publish('pushcolumn_test',JSON.stringify(pushcolum));
		},2000);
		setTimeout(function  () {
			clearInterval(interval);
			console.log("out of interval");
			client.end();
		},500000);
	}
});

