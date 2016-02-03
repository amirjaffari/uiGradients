window.uiGradients = window.uiGradients || {};

(function( window, document, $ ){

  "use strict";

  uiGradients.Track = (function () {

    var copyColor1       = $("do-copy-colour1"),
        copyColor2       = $("do-copy-colour2"),
        github           = $("#github-icon"),
        twitter          = $("#twiiter-link"),
        shareTwitterMob  = $("#twitter-mobicon"),
        shareTwitter     = $("#share-twitter"),
        shareFacebook    = $("#share-facebook"),
        showAllGradients = $("#do-show-pallete"),
        addNewGradient   = $("#do-show-github-popup"),
        copyGradientCode = $("#do-show-code-popup"),
        plugFilter       = $("#plug-filter"),
        plugPodcast      = $("#plug-podcast");

    function _bindEvents () {

      // Color Copy Buttons ----------------------------------------------------
      copyColor1.on('click', function() {
        ga('send', 'event', 'copy', 'click', 'color-1');
      });

      copyColor2.on('click', function() {
        ga('send', 'event', 'copy', 'click', 'color-2');
      });


      // Plugs -----------------------------------------------------------------
      plugFilter.on('click', function() {
        ga('send', 'event', 'plugs', 'click', 'cssFilters');
      })
      
      plugPodcast.on('click', function() {
        ga('send', 'event', 'plugs', 'click', 'awesomePodcasts');
      })


      // Social Icons ----------------------------------------------------------
      github.on('click', function() {
        ga('send', 'event', 'social', 'click', 'github');
      });

      twitter.on('click', function() {
        ga('send', 'event', 'social', 'click', 'twitter');
      });

      // Footer Buttons --------------------------------------------------------
      showAllGradients.on('click', function() {
        ga('send', 'event', 'footer-buttons', 'click', 'show pallete');
      });

      addNewGradient.on('click', function() {
        ga('send', 'event', 'footer-buttons', 'click', 'add new gradient');
      });

      copyGradientCode.on('click', function() {
        ga('send', 'event', 'footer-buttons', 'click', 'copy gradient code');
      });


      // Social Share Buttons --------------------------------------------------
      shareTwitterMob.on('click', function(event) {
        ga('send', 'social', 'twitter', 'share', 'http://uigradients.com/');
      });

      shareTwitter.on('click', function() {
        ga('send', 'social', 'twitter', 'share', 'http://uigradients.com/');
      });

      shareFacebook.on('click', function() {
        ga('send', 'social', 'facebook', 'share', 'http://uigradients.com/');
      });

    }

    function init() {
      _bindEvents();
    }

    return {
      init: init
    };

  })();

  // Initiating the events
  window.uiGradients.Track.init();

})( window, document, $ );
