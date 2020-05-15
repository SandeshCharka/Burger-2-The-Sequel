module.exports = function (sequelize, DataTypes) {

    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNull: function (val) {
                    if (!val) {
                        throw new Error("Burger Name can't be empty");
                    } else {
                        return true;
                    }
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
    });

    burger.associate = function (models) {
        burger.belongsTo(models.customer, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        })
    };

    return burger;
};