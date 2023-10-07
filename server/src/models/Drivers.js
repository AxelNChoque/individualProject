const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Drivers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "'https://w0.peakpx.com/wallpaper/745/990/HD-wallpaper-charles-leclerc-driver-f1-ferrari-formula-1-pilot-puma-scuderia-ferrari.jpg'"
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    timestamps: false,
  });
};