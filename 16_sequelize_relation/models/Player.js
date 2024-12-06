const PlayerModel = (sequelize, DataTypes) => {
    const game = sequelize.define(
      "player",
      // FK설정은 models/index.js에서 한번에 설정
      {
        player_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(63),
          allowNull: false,
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      },
    );
  
    return game;
  };
  
  module.exports = PlayerModel;