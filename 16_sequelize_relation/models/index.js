'use strict';

const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.js')["devel"];
const db = {};
// (1) Sequelize 클래스를 통해서 sequelize 객체를 생성
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

// (2) 모델을 불러오면서 인자로 정보 전달
const PlayerModel = require("./Player")(sequelize,Sequelize)
const ProfileModel = require("./Profile")(sequelize,Sequelize)
const GameModel = require("./Game")(sequelize,Sequelize)
const TeamModel = require("./Team")(sequelize,Sequelize)
const TeamGameModel = require("./TeamGame")(sequelize,Sequelize)

// (3) 모델간 관계 설정
// 관계설정과 불러오기는 따로 따로 해야함.
// 3-1) Player : Profile = 1:1
PlayerModel.hasOne(ProfileModel,{
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
})
ProfileModel.belongsTo(ProfileModel,{
  foreignKey: "player_id" // 내가 정해준 이름.
})

// 3-2) Team : Player = 1:N
// FK 관계설정시 불러오는 이름을 새로 지정해 불러주는 중
TeamModel.hasMany(PlayerModel,{
  foreignKey: "teamid", // 내가 정해주는 이름
  sourceKey:"team_id"  // 실제로 참조할 이름 --> 원하는 이름으로 설정하고 싶다면 기존 설정한 pk이름이 아닌 다른이름으로 해도됨.
  // 실제 team model의 컬럼명과 일치해야함
  // models/Team.js의 PK
})
PlayerModel.belongsTo(TeamModel,{
  foreignKey:"teamid",
  targetKey: "team_id",
})

// 3-3) Team : Game = N:N
// 중계테이블 teamgame 활용 해야함
TeamModel.belongsToMany(GameModel,{
  through: TeamGameModel,
  foreignKey:"team_id" // 내가 정해주는 이름 for team model
})

GameModel.belongsToMany(TeamModel,{
  through:TeamGameModel,
  foreignKey:"game_id"
})

// (4) db객체에 모델 추가
db.Player = PlayerModel
db.Profile = ProfileModel
db.Game = GameModel
db.Team = TeamModel
db.TeamGame = TeamGameModel

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
