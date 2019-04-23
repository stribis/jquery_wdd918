$(document).ready(function(){

  // Ajax stands for Asynchronous Javascript And XML
  // We use it to get and post data from or to different sources

  // In this scenario we are using ajax to get data from an API ( Application Programming Interface ) called jsonplaceholder
  // The data we get will be in the form of JSON which is basically just a javascript object
  // We will then use this data to pupulate our unnecessary list of awesome friends website
  let numCard = $(".username").length;
  // There are multiple ways to write an ajax request, this is just one of them
  $.ajax({
      // the first parameter of an ajax is where you can put in your options, like what kind of request you are making,
      // where are you sending the request, authentication tokens and many others.
      // The default request is a GET request, so there is no need to change that.
      // We just need to specify the url we are sending our request to
      url: "https://jsonplaceholder.typicode.com/users",
    })
      .done(function(code) {
      // .done basically waits for the server to send us a response with our JSON data
      // This works in an asynchronous nature meaning that while we wait for a response, our code will keep running, 
      // intead of staying idle until we get something back

      // Remember any request going over the network is SLOW. Thats why async is so important

      // we save our response in the variable 'code'
      // Lets see how it looks like : 
          console.log(code);
         // now we can use this data on our website! 
          for (let i = 0; i < numCard; i++) {

              let avatar = $('.avatar')[i];
              let username = $('.username')[i];
              let name = $('.name')[i];
              let email = $('.email')[i];
              let city = $('.city')[i];
              
              console.log(avatar);
              //console.log(username)
              // lets get some unique images from another API called robohash
              $(avatar).attr("src","https://robohash.org/" + code[i].username + ".png?set=set4");
              username.innerHTML = code[i].username;
              name.innerHTML = code[i].name;
              email.innerHTML = code[i].email;
              city.innerHTML = code[i].address.city;
          }
  });
    
})