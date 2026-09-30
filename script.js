/* =========================================================
   ARJUN PORTFOLIO - PROFESSIONAL JAVASCRIPT

   Features:
   1. Navbar scroll effect
   2. Active navigation
   3. Mobile navbar close
   4. Dark / Light mode
   5. Skills accordion
   6. Animated progress bars
   7. Qualification tabs
   8. Smooth scrolling
   9. Scroll reveal
   10. Scroll to top
   11. 3D card tilt
   12. Contact form validation
   ========================================================= */


$(document).ready(function () {


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar = $('.custom-navbar');


    function updateNavbar() {

        if ($(window).scrollTop() > 40) {

            navbar.addClass('scrolled');

        } else {

            navbar.removeClass('scrolled');

        }

    }


    updateNavbar();

    $(window).on(
        'scroll',
        updateNavbar
    );



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = $('section[id]');


    function updateActiveNav() {

        const scrollPosition =
            $(window).scrollTop() + 120;


        sections.each(function () {

            const sectionTop =
                $(this).offset().top;

            const sectionHeight =
                $(this).outerHeight();

            const sectionId =
                $(this).attr('id');


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                $('.nav-link')
                    .removeClass('active');


                $('.nav-link[href="#' +
                    sectionId +
                    '"]')
                    .addClass('active');
            }

        });

    }


    $(window).on(
        'scroll',
        updateActiveNav
    );


    updateActiveNav();



    /* =====================================================
       MOBILE NAVBAR CLOSE
       ===================================================== */

    $('.nav-link').on(
        'click',
        function () {

            const navbarMenu =
                $('#navbarNav');


            if (
                navbarMenu.hasClass('show')
            ) {

                navbarMenu.collapse(
                    'hide'
                );

            }

        }
    );



    /* =====================================================
       DARK / LIGHT MODE
       ===================================================== */

    const themeToggle =
        $('#theme-toggle');


    const savedTheme =
        localStorage.getItem(
            'portfolio-theme'
        );


    if (savedTheme === 'light') {

        $('body')
            .addClass('light-theme');


        themeToggle
            .removeClass('fa-moon')
            .addClass('fa-sun');

    }


    themeToggle.on(
        'click',
        function () {

            $('body')
                .toggleClass(
                    'light-theme'
                );


            if (
                $('body')
                    .hasClass(
                        'light-theme'
                    )
            ) {

                localStorage.setItem(
                    'portfolio-theme',
                    'light'
                );


                $(this)
                    .removeClass('fa-moon')
                    .addClass('fa-sun');

            } else {

                localStorage.setItem(
                    'portfolio-theme',
                    'dark'
                );


                $(this)
                    .removeClass('fa-sun')
                    .addClass('fa-moon');

            }

        }
    );



    /* =====================================================
       SKILLS ACCORDION
       ===================================================== */

    $('.skills-header').on(
        'click',
        function () {


            const currentHeader =
                $(this);


            const currentList =
                currentHeader.next(
                    '.skills-list'
                );


            /*
             * Close other skill sections
             */

            $('.skills-header')
                .not(currentHeader)
                .removeClass('active');


            $('.skills-list')
                .not(currentList)
                .removeClass(
                    'show-skills'
                );


            /*
             * Open / Close current
             */

            currentHeader
                .toggleClass('active');


            currentList
                .toggleClass(
                    'show-skills'
                );


            /*
             * Animate progress bars
             */

            if (
                currentList
                    .hasClass(
                        'show-skills'
                    )
            ) {

                animateProgressBars(
                    currentList
                );

            }

        }
    );



    /* =====================================================
       PROGRESS BAR ANIMATION
       ===================================================== */

    function animateProgressBars(
        container
    ) {


        container
            .find('.progress-bar')
            .each(function () {


                const bar =
                    $(this);


                /*
                 * Already animated?
                 */

                if (
                    bar.attr(
                        'data-animated'
                    ) === 'true'
                ) {

                    return;

                }


                const parent =
                    bar.closest(
                        '.progress-box'
                    );


                const percentageText =
                    parent
                        .find(
                            '.progress-title span:last-child'
                        )
                        .text();


                const percentage =
                    parseInt(
                        percentageText,
                        10
                    );


                if (
                    !isNaN(
                        percentage
                    )
                ) {


                    setTimeout(
                        function () {


                            bar.css(
                                'width',
                                percentage +
                                '%'
                            );


                            bar.attr(
                                'data-animated',
                                'true'
                            );


                        },
                        100
                    );

                }

            });

    }



    /*
     * Animate already opened skills
     */

    $('.show-skills').each(
        function () {

            animateProgressBars(
                $(this)
            );

        }
    );



    /* =====================================================
       QUALIFICATION TABS
       ===================================================== */

    $('.qualification-button')
        .on(
            'click',
            function () {


                const target =
                    $(this).data(
                        'target'
                    );


                /*
                 * Remove active tab
                 */

                $('.qualification-button')
                    .removeClass(
                        'active-tab'
                    );


                /*
                 * Add active tab
                 */

                $(this)
                    .addClass(
                        'active-tab'
                    );


                /*
                 * Hide all content
                 */

                $('.qualification-content')
                    .removeClass(
                        'qualification-active'
                    );


                /*
                 * Show selected content
                 */

                $('#' + target)
                    .addClass(
                        'qualification-active'
                    );

            }
        );



    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    $('a[href^="#"]').on(
        'click',
        function (e) {


            const target =
                $(this).attr('href');


            /*
             * Ignore empty #
             */

            if (
                target === '#' ||
                $(target).length === 0
            ) {

                return;

            }


            e.preventDefault();


            $('html, body').animate(

                {

                    scrollTop:
                        $(target)
                            .offset()
                            .top - 75

                },

                650

            );

        }
    );



    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    function revealElements() {


        $('.service-card, ' +
          '.project-card, ' +
          '.contact-box, ' +
          '.counter-box, ' +
          '.skills-content')
            .addClass('reveal');


        $('.reveal').each(
            function () {


                const elementTop =
                    $(this)
                        .offset()
                        .top;


                const windowBottom =
                    $(window)
                        .scrollTop() +
                    $(window).height() -
                    70;


                if (
                    elementTop <
                    windowBottom
                ) {

                    $(this)
                        .addClass(
                            'active'
                        );

                }

            }
        );

    }


    revealElements();


    $(window).on(
        'scroll',
        revealElements
    );



    /* =====================================================
       SCROLL TO TOP BUTTON
       ===================================================== */

    const scrollTopButton =
        $('<button>', {

            class: 'scroll-top',

            html:
                '<i class="fa-solid fa-arrow-up"></i>',

            'aria-label':
                'Scroll to top',

            title:
                'Back to top'

        });


    $('body')
        .append(
            scrollTopButton
        );


    function updateScrollTop() {


        if (
            $(window).scrollTop() >
            500
        ) {

            scrollTopButton
                .addClass('show');

        } else {

            scrollTopButton
                .removeClass('show');

        }

    }


    $(window).on(
        'scroll',
        updateScrollTop
    );


    scrollTopButton.on(
        'click',
        function () {


            $('html, body')
                .animate(

                    {
                        scrollTop: 0
                    },

                    650

                );

        }
    );



    /* =====================================================
       3D CARD TILT EFFECT
       ===================================================== */

    if (
        window.matchMedia(
            '(min-width: 992px)'
        ).matches
    ) {


        $('.service-card, .project-card')
            .on(
                'mousemove',
                function (e) {


                    const card =
                        this;


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        e.clientX -
                        rect.left;


                    const y =
                        e.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        (
                            (y - centerY) /
                            centerY
                        ) * -4;


                    const rotateY =
                        (
                            (x - centerX) /
                            centerX
                        ) * 4;


                    $(card).css(

                        'transform',

                        'perspective(1000px) ' +
                        'rotateX(' +
                        rotateX +
                        'deg) ' +
                        'rotateY(' +
                        rotateY +
                        'deg) ' +
                        'translateY(-10px)'

                    );

                }
            );


        $('.service-card, .project-card')
            .on(
                'mouseleave',
                function () {


                    $(this).css(

                        'transform',

                        'perspective(1000px) ' +
                        'rotateX(0) ' +
                        'rotateY(0) ' +
                        'translateY(0)'

                    );

                }
            );

    }



    /* =====================================================
       CONTACT FORM VALIDATION
       ===================================================== */

    $('.contact-form').on(
        'submit',
        function (e) {


            e.preventDefault();


            const name =
                $('#name')
                    .val()
                    .trim();


            const email =
                $('#email')
                    .val()
                    .trim();


            const subject =
                $('#subject')
                    .val()
                    .trim();


            const message =
                $('#message')
                    .val()
                    .trim();


            /*
             * Empty field validation
             */

            if (
                name === '' ||
                email === '' ||
                subject === '' ||
                message === ''
            ) {


                showFormMessage(

                    'Please fill in all fields.',

                    'error'

                );


                return;

            }


            /*
             * Email validation
             */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email
                )
            ) {


                showFormMessage(

                    'Please enter a valid email address.',

                    'error'

                );


                return;

            }


            /*
             * Success
             */

            showFormMessage(

                'Thank you! Your message is ready to be sent.',

                'success'

            );


            /*
             * Clear form
             */

            this.reset();

        }
    );



    /* =====================================================
       FORM MESSAGE
       ===================================================== */

    function showFormMessage(
        message,
        type
    ) {


        /*
         * Remove old message
         */

        $('.form-message')
            .remove();


        /*
         * Create message
         */

        const messageBox =
            $('<div>', {

                class:
                    'form-message',

                text:
                    message

            });


        /*
         * Styling
         */

        messageBox.css({

            'margin-top':
                '15px',

            'padding':
                '12px 15px',

            'border-radius':
                '10px',

            'font-size':
                '14px',

            'font-weight':
                '600',

            'background':
                type === 'success'

                    ? 'rgba(34, 197, 94, 0.12)'

                    : 'rgba(239, 68, 68, 0.12)',

            'color':
                type === 'success'

                    ? '#22c55e'

                    : '#ef4444',

            'border':
                '1px solid ' +

                (
                    type === 'success'

                        ? 'rgba(34, 197, 94, 0.25)'

                        : 'rgba(239, 68, 68, 0.25)'
                )

        });


        /*
         * Add to form
         */

        $('.contact-form')
            .append(
                messageBox
            );


        /*
         * Auto remove
         */

        setTimeout(
            function () {

                messageBox.fadeOut(
                    300,
                    function () {

                        $(this)
                            .remove();

                    }
                );

            },
            3500
        );

    }



    /* =====================================================
       IMAGE FALLBACK
       ===================================================== */

    $('img').on(
        'error',
        function () {


            if (
                !$(this)
                    .data('fallback')
            ) {


                $(this)
                    .data(
                        'fallback',
                        true
                    );


                $(this).css({

                    'background':
                        'linear-gradient(135deg, #0b1728, #172b48)',

                    'min-height':
                        '180px',

                    'object-fit':
                        'contain'

                });

            }

        }
    );



    /* =====================================================
       PAGE LOADED
       ===================================================== */

    $('body')
        .addClass(
            'page-loaded'
        );


});