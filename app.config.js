'use strict';

angular.module("myApp").config(function($routeProvider){
  $routeProvider
  .when("/home",{
    templateUrl:'home-slice/home-slice.template.html'
  })
  .when("/about",{
    templateUrl:'about/about.template.html' 
  })
  .when("/contact-us",{
    templateUrl:'contact-us/contact-us.template.html'
  })
  .when("/consultancy",{
    templateUrl:'consultancy/consultancy.template.html'
  })
  .when("/marketing",{
    templateUrl:'marketing/marketing.template.html'
  })
  .when("/publishing",{
    templateUrl:'publishing/publishing.template.html'
  })
  .when("/pr",{
    templateUrl:'pr/pr.template.html'
  })
  .when('/featured-services',{
    templateUrl:'/featured-services/featured-services.template.html'
  })
  .when('/harsh-agarwal',{
    templateUrl:'/founder/founder.template.html'
  })
  .otherwise("/home");
});


