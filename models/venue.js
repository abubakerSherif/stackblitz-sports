'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Venue.belongsToMany(models.Competition, { through: 'competitionVenue' });
    }
  }
  Venue.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Venue',
  });
  return Venue;
};


// npx sequelize-cli model:generate --name Venue --attributes name:string
// npx sequelize-cli model:generate --name OtherSport --attributes name:string
// npx sequelize-cli model:generate --name Language --attributes name:string
// npx sequelize-cli model:generate --name UmpireInfo --attributes isNewToUmpiring:boolean,participantId:number
// npx sequelize-cli model:generate --name Competition --attributes competitionName:string,competitionDivision:string,competitionStartDate:date,competitionEndDate:date,participantId:number
// npx sequelize-cli model:generate --name Volunteer --attributes description:string,isAvtive:boolean,participantId:number
// npx sequelize-cli model:generate --name HealthIndicator --attributes chestPain:boolean,heartTrouble:boolean,bloodPressure:boolean,faintOrSpells:boolean,lowerBackProblem:boolean,physicalActivity:boolean,jointOrBoneProblem:boolean,pregnant:boolean,participantId:number
// npx sequelize-cli model:generate --name Participant --attributes firstName:string,middleName:string,lastName:string,gender:string,role:string,email:string,mobileNumber:string,competitionId:number
// npx sequelize-cli model:generate --name participantOtherSport --attributes participantId:integer,otherSportId:integer
// npx sequelize-cli model:generate --name participantLanguage --attributes participantId:integer,languageId:integer
// npx sequelize-cli model:generate --name competitionVenue --attributes competitionId:integer,venueId:integer
