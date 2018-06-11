/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    // Test suite begins here, now that the DOM is ready thanks to the $(
    describe('RSS Feeds', function() {
        // Makes sure that the allFeeds variable has been defined and that it is not empty. 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //Nex test makes sure the allFeeds object has a URL defined and that the URL is not empty.

        it('URLS are defined and not empty', function() {
            allFeeds.forEach(function (feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);                
            });
            
        });

        //Next test ensures that the allFeeds object has a name defined and that the name is not empty.

        it('Names are defined and not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);                
            });
            
        })
    });


    
    describe('The Menu', function() {
        // Next test checks if the menu is hidden by default
        var myBody = document.body;


        it('checks if menu is hidden as default', function(){
            expect(myBody.classList.contains('menu-hidden')).toBeTruthy();
        });
        

         // Next test checks if the menu changes visibility when the menu icon is clicked. 

         it('toggles visibility on click', function() {
            let myMenu = document.querySelector('a.menu-icon-link')
            myMenu.click(); // show menu
            expect(myBody.classList.contains('menu-hidden')).toBeFalsy();
            myMenu.click();
            expect(myBody.classList.contains('menu-hidden')).toBeTruthy();
         });

    });
    


        // Next test ensures that the loadFeed function is called and completes its work

    describe('Initial Entries', function(){

        
        beforeEach(function(done) {
            loadFeed(0, function() { // checks if function has been called
              done();
            });
          });

        // Next test checks if there is entries in the feed container 

        it('checks if there is an entry',function(done){ // checks if there is an entry
            var entry = document.querySelectorAll('.feed .entry').children;
            expect(entry).not.toBe(0);
            done();
        });

    })

    
       // Next test checks when a new feed is loaded by the loadFeed function that the content actually changes.

    describe('New Feed Selection', function(){
        var contentFeed = document.querySelector('.feed').innerHTML;

    beforeEach(function (done) {
        loadFeed(0, function(){

            loadFeed(1, function(){
                done();
            });
        })

    });



    it("check if loaded content changed", function(done) {
      var newContentFeed = document.querySelector(".feed").innerHTML;
      expect(contentFeed).not.toBe(newContentFeed);
      done();
    });


    })

});
