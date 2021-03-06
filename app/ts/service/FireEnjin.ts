/// <reference path="../../typings/index.d.ts"/>

module Animadness {
    class FireEnjinService {
        firebase: any;

        constructor(
            protected Firebase,
            protected Auth
        ) {
            // On Load
            this.Firebase.start();
            this.Auth.start();
        }
    }

    angular.module('Animadness').service('FireEnjin', FireEnjinService);
}
