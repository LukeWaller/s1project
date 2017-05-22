describe('Testing Routes', function () {

beforeEach(module('reviewsApp'));

it('Should test routes',
inject(function ($route) {

  expect($route.routes['/'].controller).toBe('HomeController');
  expect($route.routes['/'].templateUrl).toEqual('templates/home.html');

  expect($route.routes['/'].controller).not.toBe('RegisterController');
  expect($route.routes['/'].templateUrl).not.toEqual('templates/register.html');

  expect($route.routes['/'].controller).toBe('LoginController');
  expect($route.routes['/'].templateUrl).toEqual('templates/login.html');

  expect($route.routes['/'].controller).not.toBe('LogoutController');
  expect($route.routes['/'].templateUrl).not.toEqual('templates/logout.html');

  expect($route.routes['/'].controller).not.toBe('ReviewController');
  expect($route.routes['/'].templateUrl).not.toEqual('templates/review.html');

}));

});