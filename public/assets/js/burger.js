$(function () {

    $("#orderButton").hide();
    $("#addCustomerName").hide();

    $("#burgerButton").on("click", function (event) {

        $("#burgerButton").toggle();
        $("#orderButton").toggle();
        $("#addCustomerName").toggle();
    });

    // Add Burger Form
    $("#addBurger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = $("#addBurger [name=addBurgerInput]").val().trim();

        var newCustomer = {
            customer_name: $("#addBurger [name=addCustomerName]").val().trim()
        }

        $.ajax("/api/customers", {
            type: "POST",
            data: newCustomer,
        }).then(function (data) {
            var id = data.id
            $.ajax("/api/burgers", {
                type: "POST",
                data: {
                    burger_name: newBurger,
                    customerId: id
                }
            }).then(function (data) {
                location.reload();
            });
        })
    });
    $(".eatMe").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr('id');

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
        }).then(function () {
            location.reload();
        })
    });
    $("#clearBurgers").on("click", function (event) {
        event.preventDefault();
        $.ajax("/api/burgers", {
            type: "DELETE"
        }).then(function () {
            location.reload();
        })
    });

    $("#clearCustomers").on("click", function (event) {
        event.preventDefault();
        $.ajax("/api/customers", {
            type: "DELETE"
        }).then(function () {
            location.reload();
        })
    });
});