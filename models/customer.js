module.exports = function (sequelize, DataTypes) {

    var customer = sequelize.define("customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    customer.associate = function (models) {
        // Associating Customer with Burgers
        // When an Customer is deleted, also delete any associated Burgers
        customer.hasMany(models.burger, {
            onDelete: "CASCADE"
        });
    };

    return customer;
};