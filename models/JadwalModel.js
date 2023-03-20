import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Jadwal = db.define('jadwal',{
    kelas: DataTypes.STRING,
    hari : DataTypes.STRING,
    waktu : DataTypes.STRING,
    dosen : DataTypes.STRING,
    asisten1 : DataTypes.STRING,
    asisten2 : DataTypes.STRING
},{
    freezeTableName:true
});

export default Jadwal;

// (async()=>{
//     await db.sync();
// })();