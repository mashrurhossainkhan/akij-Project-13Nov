module.exports = (sequelize, DataTypes) => {
    const VehicleType = sequelize.define("vehicleType", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
        },

        typeofVehicle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'typeofVehicle',
        },
        
        });
    return VehicleType;
};
    