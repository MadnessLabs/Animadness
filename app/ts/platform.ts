/// <reference path="../typings/index.d.ts"/>

module Animadness {
    class PlatformService {

        constructor(
            FireEnjin,
            protected $ionicPlatform,
            protected $cordovaKeyboard,
            protected $cordovaSplashscreen,
            protected enjin,
            protected $rootScope
        ) {
            // INJECT DEPENDENCIES ONLY
            // USE run() INSTEAD
        }

        run() {
            // ON LOAD
            this.$ionicPlatform.ready(() => {
                if (window.cordova) { 
                    if (window.cordova.plugins.Keyboard) {
                        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                        this.$rootScope.$watch(() => {
                            return this.$cordovaKeyboard.isVisible();
                        }, (value) => {
                            this.$rootScope.keyboardOpen = value;
                        });
                    }   

                    this.$cordovaSplashscreen.hide();
                }
            });
        }
    }

    angular.module('Animadness').service('Platform', PlatformService);
}

