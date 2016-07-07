var widgetStrings = (function () {
    
  var _values = {
      "a" : "a valor",
      "b 1" : "b 1 valor",
      7 : "7 valor",
      TITLE : "Customer reviews",
      CREATE : "Write a customer review",
      READ : "",
      UPDATE : "Edit your review",
      DELETE : "Delete your review",
      "MORE COMMENTS" : "More comments",
      "LESS COMMENTS" : "Less comments",
      "LABEL REVIEW INTRO" : "Your review of this product",
      "LABEL STAR RATING" : "Your overall rating of this product",
      "LABEL REVIEW TITLE" : "Title of your review",
      "LABEL REVIEW BODY" : "Write your review here",
      "MESSAGE REVIEW OK" : "Thank you!"
      
     
  }
    

  // Explicitly reveal public pointers to the private functions 
  // that we want to reveal publicly

   var value = function(key) {
       return _values[key];
   };
  
  return {
    value: value
  }
})();