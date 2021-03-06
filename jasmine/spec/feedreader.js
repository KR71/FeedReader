/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All of the tests are within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('AllFeeds is defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Allfeeds urls are defined', function() {
            for(let feed of allFeeds) {
                //console.log(feed)
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('AllFeeds names are defined', function() {
            for(let feed of allFeeds) {
                //console.log(feed)
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });




    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', function () {
            const body = document.querySelector('body');

            expect(body.classList.contains('menu-hidden')).toBe(true);

        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu toggles on and off', function () {
            const body = document.querySelector('body');
            const icon = document.querySelector('.menu-icon-link');

            icon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            icon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);

        });
    });


        /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        //DONE GIVE US THE CALLBACK ONCE DONE, AND TEST DOESNT START UNTIL THIS IS DONE
         beforeEach(function (done) {
             loadFeed(0,done);
         });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('calls back with data', function () {
            const feed = document.querySelectorAll('.feed .entry');
            //console.log(feed.length);
            expect(feed.length).toBeGreaterThan(1);

        });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New feed selection', function() {

        const feed = document.querySelectorAll('.feed');
        let prevUrl;
        let newUrl;

        // console.log(feed);

        //console.log(feed);

        beforeEach(function(done) {

            loadFeed(0, function() {


                 // feed 0 done loading
               console.log(feed);
                prevUrl = $('.feed').html();
                console.log(prevUrl);
                loadFeed(1, function(){

                    // feed 1 done loading


                    newUrl = $('.feed').html();

                    // all variables initialized, can begin tests

                    done();

                });
            });

        });
        it('loadFeed changes with entries', function() {

            /* TODO: Write a test that ensures when a new feed is loaded */

            //console.log(initialFeed);

                expect(prevUrl === newUrl).toBe(false);

        });

     });

}());
