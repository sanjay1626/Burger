$(function() {
  //Preven to trigger
    $(".create-form").on("submit", function(event) {
      //event load
      event.preventDefault();
      //creates new Burger
      var newBurger = {
        burger_name: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };
      //POST Request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
    //Eat Burger on click event
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
      //devoure to True
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });