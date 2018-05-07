var express = require('express');
var router = express.Router();
var reptile = require('../public/javascripts/reptile');
var servers = require('../servers/search');

/* GET home page. */
router.get('/search', function(req, res) {
  reptile.reptile(req.query.username,req.query.server,function(result){
      res.header('Access-Control-Allow-Origin', '*');
      res.jsonp({result});
  })
});

/* GET20 */
router.get('/matchs',function(req, res) {
  servers.matchs(req.query.userId,req.query.server,function(result){
    res.header('Access-Control-Allow-Origin', '*');
    res.jsonp({result});
  })
})

/* GET rankedStates */
router.get('/rankedStates',function(req, res) {
  servers.rankedStates(req.query.userId,req.query.season,req.query.server,req.query.queueSize,req.query.mode,function(result){
    res.header('Access-Control-Allow-Origin', '*');
    res.jsonp({result});
  })
})

/*组队*/
router.get('/summaryPlayed',function(req,res) {
  servers.summaryPlayed(req.query.userId,req.query.season,req.query.server,function(result){
    res.header('Access-Control-Allow-Origin', '*');
    res.jsonp({result});
  });
})

/*最近20场单场数据*/
router.get('/singleFieldData',function(req,res) {
  if(req.query.after == undefined){
    req.query.after = '';
  }
  servers.SingleFieldData(req.query.userId,req.query.server,req.query.queueSize,req.query.mode,req.query.after,function(result){
    res.header('Access-Control-Allow-Origin', '*');
    res.jsonp({result});
  });
})

//查看队友
router.get('/CheckTeammate',function(req,res) {
  console.log(req.query.matchId);
  servers.checkTeammate(req.query.matchId,function(result){
    res.header('Access-Control-Allow-Origin', '*');
    res.jsonp({result});
  });
})

module.exports = router;
