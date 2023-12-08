/*---------- Payment Methods ----------*/

// Wait for the document to be ready
$(document).ready(function(){

  // Add a click event listener to all labels inside the "payment" class
  $(".payment label").click(function(){

    // Check if the clicked label's next sibling with class "payment-body" has the class "active"
    if($(this).next(".payment-body").hasClass("active")){
      // If it has the class "active", remove the class to close the payment body
      $(this).next(".payment-body").removeClass("active");
    }

    else{
      // If it does not have the class "active", remove the "active" class from all payment bodies
      $(".payment .payment-body").removeClass("active");
    }

  })

})