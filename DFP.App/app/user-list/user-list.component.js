'use strict';

angular.
module('userList').
component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User',
        function UserListController(User) {
            var self = this;
            User.GetAll().then((success) => {
                self.users = success.data;
            }, (error) => {
                console.log(error);
            })
            self.orderProp = 'age';
        }
    ]
});