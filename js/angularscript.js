(function(){
// Angular
// var app = angular.module('myApp', ['ngRoute']);
var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);
	app.config(function($routeProvider, $locationProvider) {
		// $locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'template/dashboard.html',
				controller: 'homecontroller'
			})
			.when('/dashboard', {
				templateUrl: 'template/dashboard.html',
				controller: 'dashboardController'
			})
			.when('/ui', {
				templateUrl: 'template/ui.html',
				controller: 'uiController'
			})
			.when('/expense', {
				templateUrl: 'template/expense.html',
				controller: 'expenseController'
			})
			.when('/invoice', {
				templateUrl: 'template/invoice.html',
				controller: 'invoiceController'
			})
			.when('/recur', {
				templateUrl: 'template/recur.html',
				controller: 'recurController'
			})
			.when('/profile', {
				templateUrl: 'template/profile.html',
				controller: 'profileController'
			})
			.when('/settings', {
				templateUrl: 'template/settings.html',
				controller: 'settingsController'
			})
			.when('/login', {
				templateUrl: 'template/login.html',
				controller: 'loginController'
			})
			.when('/banks', {
				templateUrl: 'template/banks.html',
				controller: 'bankController'
			})
			.when('/phonebook', {
				templateUrl: 'template/phonebook.html',
				controller: 'phonebookController'
			})
			.otherwise({
				redirectTo: 'template/dashboard.html'
			});
	});
	app.controller('loginController', function($scope){});
	app.controller('homecontroller', function($scope){
		/* Nav menu */
		$scope.user = {
			firstname: "Basheer",
			lastname: "Shah",
			image: "img/basher.png",
			menu:[
				{page: "dashboard", title: "Dashboard", icon: "dashboard"},
				{page: "banks", title: "Banks", icon: "bank"},
				{page: "phonebook", title: "Phone book", icon: "book"},
				{page: "expense", title: "Expenses", icon: "shopping-cart"},
				{page: "invoice", title: "Invoice", icon: "file-text-o"},
				{page: "recur", title: "Reccurring Bills", icon: "dashboard"},
				{page: "profile", title: "My Profile", icon: "user"},
				{page: "settings", title: "Settings", icon: "cogs"},
				{page: "login", title: "Login", icon: "lock"},
				{page: "ui", title: "UI", icon: "bookmark-o"}
			]
		};
		/* End menu */


		// Toggle sede menu
		$scope.menuStatus = true;
		$scope.toggleMenu = function(){
			$scope.menuStatus = $scope.menuStatus === false ? true : false;
		};
		$scope.users = [
			{ id: 1, firstname: 'Basheer', lastname: 'Basheer', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 206.98},
			{ id: 2, firstname: 'Roshan', lastname: 'Ismail', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 12.23},
			{ id: 3, firstname: 'Muhsin', lastname: 'Manniyil', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 302.12},
			{ id: 4, firstname: 'Mohasin', lastname: 'Moorkote', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 18.21},
			{ id: 5, firstname: 'Usharif', lastname: 'Kalathingal', ad1: '3 Richard Court', ad2: 'Truro Road', post: 'N22 8DL', mob: '07875506426', image:"img/me.jpg", spent: 85.85}
		];
		$scope.currentuser = 1;
		$scope.lastspend = 1320.90;

		$scope.items = [
			{ product: '1 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
			{ product: '2 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
			{ product: '3 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
			{ product: '4 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'pending'},
			{ product: '5 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
			{ product: '6 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'approved'},
			{ product: '7 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
			{ product: '8 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
			{ product: '9 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
			{ product: '10 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
			{ product: '10 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
			{ product: '11 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
			{ product: '12 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
			{ product: '13 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},     
			{ product: '14 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
			{ product: '15 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
			{ product: '16 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
			{ product: '17 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'denied'},
			{ product: '18 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
			{ product: '19 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'approved'},
			{ product: '20 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
			{ product: '21 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
			{ product: '22 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
			{ product: '23 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
			{ product: '24 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
			{ product: '25 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
			{ product: '26 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
			{ product: '27 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},     
			{ product: '28 Lorem ipsum', date: '12-March-2013', rate: 12.35, member: 1, status: 'approved' },
			{ product: '29 dolor sit', date: '1-January-2011', rate: 60.54, member: 3, status: 'pending'},
			{ product: '30 consectetur', date: '12-December-2014', rate: 12.56, member: 1, status: 'pending'},
			{ product: '31 adipisicing', date: '14-November-2014', rate: 0.99, member: 1, status: 'approved'},
			{ product: '32 do eiusmod', date: '2-November-2014', rate: 4.00, member: 2, status: 'approved'},
			{ product: '33 magna aliqua', date: '16-February-2014', rate: 6.54, member: 2, status: 'denied'},
			{ product: '34 exercitation', date: '30-November-2014', rate: 60.32, member: 2, status: 'pending'},
			{ product: '35 consequat', date: '5-May-2014', rate: 5.12, member: 1, status: 'denied'},
			{ product: '36 reprehenderit', date: '12-April-2014', rate: 8.99, member: 5, status: 'approved'},
			{ product: '37 voluptate', date: '18-November-2014', rate: 34.54, member: 4, status: 'approved'},
			{ product: '38 ugiat nulla', date: '28-June-2014', rate: 55.12, member: 1, status: 'pending'},
			{ product: '39 occaecat cupidatat', date: '21-June-2014', rate: 99.54, member: 3, status: 'pending'},
			{ product: '40 proident', date: '31-December-2014', rate: 15.50, member: 2, status: 'denied'},
			{ product: '42 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'pending'},
			{ product: '43 culpa qui', date: '1-November-2014', rate: 34.05, member: 1, status: 'denied'},
			{ product: '44 mollit anim', date: '3-November-2014', rate: 45.00, member: 4, status: 'approved'}
		];
		$scope.editmode = false;
		$scope.deleteitem = function (delItem) {
			$scope.items.splice(delItem, 1);
			// alert(delItem);
		};
		// limit page items
		$scope.currentpage = 0;
		$scope.pageSize = 10;
		$scope.pagelist = function (start, end) {
			var ret = [];
			start = $scope.totalpages();
			if (!end) {
				end = start;
				start = 0;
			}
			for (var i = start; i < end; i++) {
				ret.push(i);
			}
			return ret;
		};
		$scope.prevlist = function () {
			if ($scope.currentpage > 0) {
				$scope.currentpage--;
			}
		};
		$scope.nextlist = function () {
			if($scope.currentpage <= ($scope.items.length/$scope.pageSize - 1)){
				$scope.currentpage++;
			}
		};
		$scope.showlist = function (argument) {
			$scope.currentpage = argument;
		};
		$scope.totalpages = function (argument) {
			return Math.ceil($scope.items.length/$scope.pageSize);
		};
		$scope.addtolist = function () {
			$scope.items.push({product: $scope.newitem.name, date: '03-Dec-2014', rate: $scope.newitem.price, member: $scope.currentuser, status: 'pending' });
			$scope.newitem = '';
		};
		// alternative for sum
		$scope.sum = function(items, prop){
			return items.reduce(function(a, b){
				return a + b[prop];
			}, 0);
		};
		// alternative for percentage
		$scope.percentage = function (num1, num2) {
			var num = num1 / num2 * 100;
			return num.toFixed(2);
		};
		$scope.totalamount = $scope.sum($scope.users, 'spent');
		$scope.addrecur = {fixed: true,
			recuringterm:[
				{term: 'Daily'}, 
				{term: 'Weekly'}, 
				{term: 'Monthly'}, 
				{term: 'Yearly'}
			]
		};
		$scope.addrecur.recurterm = $scope.addrecur.recuringterm[2];
		$scope.recurbills = [
			{id: 1, recurterm:'Yearly', fixed: true, type:'Rent deposit', amount: 1200, due: '12-12-2014'},
			{id: 2, recurterm:'Monthly', fixed: true, type:'Council Tax', amount: 321.80, due: '12-12-2014'},
			{id: 3, recurterm:'Monthly', fixed: false, type:'Electricity', amount: 112.20, due: '12-12-2014'},
			{id: 4, recurterm:'Monthly', fixed: false, type:'Gas', amount: 101, due: '12-12-2014'},
			{id: 5, recurterm:'Monthly', fixed: false, type:'Broadband', amount: 23.50, due: '12-12-2014'},
		];
		$scope.recurbill = function () {
			$scope.recurbills.push({recurterm: $scope.addrecur.recurterm, fixed: $scope.addrecur.fixed, type: $scope.addrecur.type, amount: $scope.addrecur.amount, due: $scope.addrecur.due});
			$scope.addrecur.type ='';
			$scope.addrecur.fixed = true;
			$scope.addrecur.amount = '';
			$scope.addrecur.due = '';
		};
	});
	app.controller('dashboardController', function($scope){
		/* Task widget */
		$scope.newTask = {};
		$scope.tasks = [
			{'name': 'I have to do this', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere asperiores at magni! Officia vero sunt, rerum tempore, deserunt illo expedita iure blanditiis deleniti doloremque molestias fuga quod nemo perferendis ipsam. ipsum dolor sit amet kili paari poyi', 'date': '2015-05-18T18:30:00.000Z', 'done': true},
			{'name': 'I have to do that', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum corporis commodi voluptate suscipit ratione, ipsa sapiente vitae dolores, veritatis magnam modi reiciendis ullam, officiis inventore facere mollitia ipsam error quam? ipsum dolor sit amet kili paari poyi', 'date': '2014-06-24T18:30:00.000Z', 'done': false},
			{'name': 'He has to do those', 'detail': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum fugit, dolore inventore minus, labore, voluptas blanditiis corrupti perspiciatis illum velit excepturi voluptates delectus odio assumenda earum maxime molestias minima. ipsum dolor sit amet kili paari poyi', 'date': '2015-07-12T18:30:00.000Z', 'done': true}
		];
		// New task
		$scope.addTask = function(){
			$scope.tasks.push({
				name: $scope.newTask.name,
				detail: $scope.newTask.detail,
				date: $scope.newTask.date,
				done: false
			});
			$scope.newTask = {};
		};
		// Delete task
		$scope.deleteTastk = function (taskIndex) {
			var confirmDelete = confirm("Do you really need to delete the task");
			if (confirmDelete) {
				$scope.tasks.splice(taskIndex, 1);
			}
		};
		/* End task */

		$scope.todolist = [
			{ id: 1, task: 'Some thing to do', asignedto: 1, done: false},
			{ id: 2, task: 'Nothing to do', asignedto: 3, done: true},
			{ id: 3, task: 'Meeting at 9 PM', asignedto: 1, done: false},
			{ id: 4, task: 'Whole cleaning home', asignedto: 5, done: true},
			{ id: 5, task: 'Verude oru rasam', asignedto: 2, done: false}
		];
		$scope.addtodo = function (newToDo) {
			// alert(newToDo);
			$scope.todolist.push({id: 3, task: newToDo, asignedto: $scope.currentuser, done: false});
			// $scope.todolist.push({id: 3, task: $scope.newtodo, asignedto: $scope.currentuser, done: false});
			$scope.newtodo = '';
		};
	});
	app.controller('expenseController', function($scope){});
	app.controller('invoiceController', function($scope){
		$scope.invoicebill = {
			id: 12, invoicefrom: '10-November-2014', invoicedate: '12-December-2014', status:'pending', rent: '1200',
			invoiceprice:[
				{item: 'Rent', price: 1200},
				{item: 'Mess', price: 50.56},
				{item: 'Broadband', price: 25.00},
				{item: 'Electricity', price: 65.87},
				{item: 'Gas', price: 55.80}
			],
			contribution: 148.62
		};
	});
	app.controller('recurController', function($scope){});
	app.controller('profileController', function($scope){
		// $scope.tabMenu = {profile};
		$scope.menuItems = ["settings-profile","edit-profile","settings-purchase","settings-payment","settings-password"];
		$scope.selectedTab = $scope.menuItems[0];
		$scope.currentTab = function(switchTab){
			// alert(switchTab);
			$scope.selectedTab = switchTab;
		};
	});
	app.controller('settingsController', function($scope){});
	app.filter('percentage', ['$filter', function ($filter) {
		return function (input, decimals) {
			return $filter('number')(input * 100, decimals) + '%';
		};
	}]);
	app.filter('startFrom', function () {
		return function (input, start) {
			return input.slice(start);
		};
	});
	app.filter('sum', function(){
		return function(items, prop){
			return items.reduce(function(a, b){
				return a + b[prop];
			}, 0);
		};
	});
	
	app.controller('phonebookController', function($scope, $http){
		$scope.contactMode = {
			activeList : 0,
			editMode : false,
			newMode: false,
			titleList : ['Mr','Mrs','Dr']
		};

		$scope.dynamicField = function(buttonStatus, inputIndex){
			if (buttonStatus) {
				$scope.currentContact.contacts.push({"phone": ""});
			}else{
				$scope.currentContact.contacts.splice(inputIndex,1);
			}
		};
		$scope.removeField = function (argument) {
			$scope.inputs.splice(inputIndex,1);
		};

		$scope.currentContact = {};
		$scope.phoneContacts = {};

		$http.get("./js/phonebook.json")
			.success(function(response) {
				$scope.phoneContacts = response.phonebook;
				$scope.initialContact(0);
			});

		$scope.initialContact = function (contactIndex) {
			if (!contactIndex) {
				contactIndex = 0;
			}
			$scope.selectedContact = {};
			$scope.selectedContact = $scope.phoneContacts[contactIndex];
			$scope.contactMode.activeList = contactIndex;
			$scope.contactMode.editMode = false;
			$scope.contactMode.newMode = false;
		};

		// Take clicked item to the table
		// TODO show item from the json list intead of making new json
		$scope.getDeatils = function (detailsIndex){
			$scope.contactMode.editMode = false;
			$scope.selectedContact = $scope.phoneContacts[detailsIndex];
			$scope.contactMode.activeList = detailsIndex;
		};

		$scope.newContact = function (argument) {
			$scope.contactMode.editMode = true;
			$scope.contactMode.newMode = true;
			// Clear selected JSON list
			$scope.currentContact = {};
			$scope.currentContact = { "contacts" : [{"phone": ""}]};
			// Clear current add JSON lsit 
			// $scope.currentContact = {};
		};
		$scope.editContact = function () {
			var currentPersonId = $scope.contactMode.activeList;
			// alert(currentPersonId);
			$scope.contactMode.editMode = true;
			$scope.contactMode.newMode = false;
			// $scope.master= angular.copy(user);
			$scope.currentContact = angular.copy($scope.phoneContacts[currentPersonId]);
		};
		$scope.deleteContact = function (argument) {
			var currentPersonId = $scope.contactMode.activeList;
			var confirmDelete = confirm("Do you really need to delete " + $scope.phoneContacts[currentPersonId].firstname + " " + $scope.phoneContacts[currentPersonId].lastname);
			if (confirmDelete) {
				$scope.phoneContacts.splice(currentPersonId, 1);
				$scope.initialContact(0);
			}
		};

		$scope.addContact = function (argument) {
			if ($scope.contactMode.newMode){
				$scope.phoneContacts.push($scope.currentContact);
				$scope.initialContact($scope.phoneContacts.length - 1);
			}else{
				$scope.phoneContacts[$scope.contactMode.activeList] = angular.copy($scope.currentContact);
				$scope.initialContact($scope.contactMode.activeList);
			}
		};
	});
	app.controller('bankController', function($scope, $http){

		$scope.status = {
			isFirstOpen: true,
			oneAtATime: true,
		};

		$scope.banks =[ 
			{
				"name":"PNB",
				"branchcode": "13-35-96",
				"ifsc": 989525621542,
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Manjeri',
				"address": ["bank addres line 1", "Banks address line 2"]
		  },{ 
				"name":"ICICI Banks",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Calicut',
				"address": ["bank addres line 1", "Banks address line 2"]
		  },{ 
				"name":"SBT",
				"ifsc": 989525621542,
				"branchcode": "13-35-96",
				"micr": 1324586468,
				"swift": 99944422258,
				"contact": "0483-569821",
				"branch": 'Pandikkad',
				"address": ["bank addres line 1", "Banks address line 2"]
		  }
		];
		$scope.accounts = [
			{
				"name": "Basheer Shah",
				"acnumber": 11223344,
				"type": "Savings account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			},{
				"name": "Shah Basheer",
				"acnumber": 11223344,
				"type": "Current account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			},{
				"name": "Basheer Shah",
				"acnumber": 11223344,
				"type": "Business account",
				"iban": 1236548769,
				"issuedate": "12-05-1986",
				"balance": "695.20"
			}
		];
		$scope.cards = [
			{
				"id": 1,
				"bankid": 999999,
				"type": "VISA",
				"no": "1234 5678 9012 3456",
				"from": "01/06",
				"expiry": "05/18",
				"cvv": 345,
				"name": "Kallayi Basheer Shah"
			},{
				"id": 2,
				"bankid": 888888,
				"type": "Master",
				"no": "3456 7890 1234 5678",
				"from": "06/12",
				"expiry": "07/16",
				"cvv": 678,
				"name": "Shah Basheer"
			},{
				"id": 3,
				"bankid": 777777,
				"type": "VISA",
				"no": "9012 3456 1234 5678",
				"from": "03/10",
				"expiry": "08/17",
				"cvv": 123,
				"name": "Basheer Shah Kallayi"
			}
		];
		$scope.cheques = [
			{
				"id": 1,
				"accoutid": 87867867,
				"issuedate": "20-May-2015",
				"from": "15-May-2015",
				"to": "22-May-2015"
			},{
				"id": 2,
				"accoutid": 1232343434,
				"issuedate": "12-June-2015",
				"from": "10-June-2015",
				"to": "20-June-2015"
			}
		];
		$scope.chequerecord = [
			{
				"id": 1,
				"chequeno": 1234343,
				"number": 2222222,
				"date": "21-Feb-2015",
				"favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
				"amount": 12000,
				"deposit": "Est sequi commodi libero eos nemo praesentium sint ut voluptate rem.",
				"balance": 56980
			},{
				"id": 2,
				"chequeno": 222222,
				"number": 33333,
				"date": "22-March-2015",
				"favor": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
				"amount": 6000,
				"deposit": "Est sequi commodi libero eos nemo praesentium sint ut voluptate rem.",
				"balance": 48000
			}
		];

$scope.newCard = [
	{
		"type": "VISA",
		"no": "1234 5678 9012 3456",
		"from": "01/06",
		"expiry": "05/18",
		"cvv": 345,
		"name": "Kallayi Basheer Shah"
	}
];
		$scope.addCard = function(){
			
		};


	});

})();