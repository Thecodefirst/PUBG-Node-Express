var request = require('request');

var url = 'https://pubg.op.gg/api/users/'
var checkTeammate_matches = 'https://pubg.op.gg/api'

// 最近20场数据
var matchs = function(userId,server,callback){
    var options = {
        url:url+userId+'/matches/recent?server='+server,
        headers: {
            'User-Agent': 'request'
        }
    }
    request(options,function(error,response,body){
        callback({'body':body})
    });
}

// 个人rank数据
/*
    userId  用户Id
    season  赛季
    server  服务器
    queueSize  单排/双排/四排
    mode  第一/第三 人称
*/
var rankedStates = function(userId,season,server,queueSize,mode,callback){
    var options = {
        url:url+userId+"/ranked-stats?season="+season+"&server="+server+"&queue_size="+queueSize+"&mode="+mode,
        headers: {
            'User-Agent': 'request'
        }
    }
    console.log(options);
    request(options,function(error,response,body){
        callback({'body':body})
    });
}

//最近组队
var summaryPlayed = function(userId,season,server,callback){
    var options = {
        url:url+userId+"/matches/summary-played-with?season="+season+"&server="+server,
        headers: {
            'User-Agent': 'request'
        }
    }
    request(options,function(error,response,body){
        console.log(body);
        callback({'body':body})
    });
}


//最近20场单场数据-st
var SingleFieldData = function(userId,server,queue_size,mode,after,callback){
    var options = {
        url:url+userId+"/matches/recent?server="+server+'&queue_size='+queue_size+'&mode='+mode+'&after='+after,
        headers: {
            'User-Agent': 'request'
        }
    }
    console.log(options);
    request(options,function(error,response,body){
        callback({'body':body})
    });
}

//查看队友-单场详细数据
var checkTeammate = function(matchId,callback){
    var options = {
        url:checkTeammate_matches+"/matches/"+matchId,
        headers: {
            'User-Agent': 'request'
        }
    }
    console.log(options);
    request(options,function(error,response,body){
        callback({'body':body})
    });
}

module.exports.matchs = matchs;
module.exports.rankedStates = rankedStates;
module.exports.summaryPlayed = summaryPlayed;
module.exports.SingleFieldData = SingleFieldData;
module.exports.checkTeammate = checkTeammate;