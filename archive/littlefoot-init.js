/**
 * Littlefoot Footnotes Initialization
 * For infodumpsterfire.com
 *
 * This script initializes Littlefoot with custom configuration
 * to improve footnote appearance and functionality.
 */

(function() {
  'use strict';

  /**
   * Initialize Littlefoot when DOM is ready
   */
  function initLittlefoot() {
    // Check if littlefoot is available
    if (typeof littlefoot === 'undefined') {
      console.error('Littlefoot library not loaded. Make sure to include littlefoot.js before this script.');
      return;
    }

    // Initialize with custom options
    littlefoot({
      // BUTTON CONFIGURATION
      // =====================

      // Use numbers instead of ellipses (set to false to use ellipses)
      // You can toggle this based on preference
      numberResetSelector: '',  // Don't reset numbering
      useFootnoteOnlyOnce: true,  // Each footnote button appears only once

      // DISPLAY OPTIONS
      // ===============

      // Prevent footnote from dismissing when clicking outside
      dismissOnUnhover: false,  // Keep open until explicitly closed
      hoverDelay: 250,  // Delay in ms before showing on hover (0 to disable hover)

      // Only activate on click, not hover (recommended for mobile)
      activateOnHover: false,  // Set to true if you want hover activation

      // POSITIONING
      // ===========

      // Allow repositioning if footnote would go off-screen
      allowDuplicates: false,
      anchorParentSelector: 'article, .post-content, main, body',  // Where to position relative to

      // CONTENT OPTIONS
      // ===============

      // Keep footnote content in DOM (better for SEO)
      contentTemplate: '<aside class="littlefoot__popover" id="fncontent:<% id %>"><div class="littlefoot__wrapper"><div class="littlefoot__content"><% content %></div></div></aside>',

      // Customize the button template
      // Default uses numbers, but you can customize the display
      buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" aria-label="Footnote <% number %>" data-footnote-id="<% id %>"><span class="littlefoot__button__content"><% number %></span></button>',

      // ANIMATION
      // =========

      // Scroll to footnote if it's off-screen
      activateCallback: function(popover, button) {
        // Custom callback when footnote is activated
        // You can add analytics tracking here
        console.log('Footnote activated:', button.dataset.footnoteId);
      },

      dismissCallback: function(popover, button) {
        // Custom callback when footnote is dismissed
        console.log('Footnote dismissed:', button.dataset.footnoteId);
      }
    });

    console.log('Littlefoot footnotes initialized successfully!');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLittlefoot);
  } else {
    // DOM already loaded
    initLittlefoot();
  }
})();

/**
 * CUSTOMIZATION OPTIONS:
 * =====================
 *
 * 1. TO USE ELLIPSES INSTEAD OF NUMBERS:
 *    Modify the buttonTemplate above to:
 *    buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote" aria-label="Footnote"><span class="littlefoot__button__ellipsis">...</span></button>',
 *
 * 2. TO USE CUSTOM SYMBOLS (e.g., asterisks, daggers):
 *    buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote" aria-label="Footnote"><span class="littlefoot__button__content">†</span></button>',
 *
 * 3. TO USE ICONS/IMAGES:
 *    buttonTemplate: '<button class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>" aria-label="Footnote <% number %>"><img src="/path/to/icon.svg" alt="<% number %>" /></button>',
 *    Then style with CSS in littlefoot-custom.css
 *
 * 4. TO CHANGE ACTIVATION (hover vs click):
 *    Set activateOnHover: true (hover to show)
 *    Set activateOnHover: false (click to show) - recommended for mobile
 *
 * 5. TO ADD CUSTOM ANIMATIONS:
 *    Add CSS transitions in littlefoot-custom.css
 */
