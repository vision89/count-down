( function () {

	'use strict';
  Polymer({

    is: 'count-down',

    properties: {

      endTime: {

        type: Object,
        value: undefined

      }

    },

    // Element Lifecycle

    ready: function() {
      // `ready` is called after all elements have been configured, but
      // propagates bottom-up. This element's children are ready, but parents
      // are not.
      //
      // This is the point where you should make modifications to the DOM (when
      // necessary), or kick off any processes the element wants to perform.
      
      this.timer = undefined;
      this.hours = '00';
      this.minutes = '00';
      this.seconds = '00';

    },

    attached: function() {
      // `attached` fires once the element and its parents have been inserted
      // into a document.
      //
      // This is a good place to perform any work related to your element's
      // visual state or active behavior (measuring sizes, beginning animations,
      // loading resources, etc).

      /**
       * Helps make sure each time element is formatted properly
       * @param  {[type]} t [description]
       * @return {[type]}   [description]
       */

      function _timeFormatter( t ) {

        if ( t === undefined ) {

          return '00';

        } else if ( t < 10 ) {

          return '0' + t;

        } else {

          return t;

        };

      };

      var that = this;

      this.timer = countdown( this.endTime, function ( ts ) {

        var hours = _timeFormatter( ts.hours );
        var minutes = _timeFormatter ( ts.minutes );
        var seconds = _timeFormatter( ts.seconds );

        if ( hours !== that.hours ) {

          that.hours = hours;

        }

        if ( minutes !== that.minutes ) {

          that.minutes = minutes;

        }

        if ( seconds !== that.seconds ) {

          that.seconds = seconds;

        }

      });

    },

    detached: function() {
      // The analog to `attached`, `detached` fires when the element has been
      // removed from a document.
      //
      // Use this to clean up anything you did in `attached`.

      window.clearInterval( this.timer );

    }

  });

})();