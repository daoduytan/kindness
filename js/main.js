(function($) {

    $(document).ready(function() {

        $('.home_slider').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false

        });

        $('.home_blog-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-chevron-right right" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-chevron-left left" aria-hidden="true"></i>',
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.post-recent-slider ').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-chevron-right right" aria-hidden="true"></i>',
            prevArrow: '<i class="fa fa-chevron-left left" aria-hidden="true"></i>',
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        $('.grid').isotope({
            itemSelector: '.grid-item'
        });

        $('.btn-search').on('click', 'a', function(event) {
            event.preventDefault();

            openSearch();

        });

        $('.close-search').on('click', function() {
             event.preventDefault();
            closeSearch();
        });

        // // scroll fixed 
        // $(window).scroll(function() {

        //     var winTop =  $(window).scrollTop(),
        //         Height =  $('.page-submit-post-main').offset().top;

        //     console.log(winTop, Height)

        //     if(winTop > Height + 50) {

        //         $('.page-submit-post-top ').addClass('fixed')

        //     } else {

        //          $('.page-submit-post-top ').removeClass('fixed')

        //     }

        // })

        // run uplaof file
        uploadFile();


        // editor 
        var editor = new MediumEditor('.editable'
            );

        $(function () {
            $('.editable').mediumInsert({
                editor: editor,
                addons: {
                    images: {
                        uploadScript: null,
                        deleteScript: null,
                        captionPlaceholder: 'Type caption for image',
                        styles: {
                            slideshow: {
                                label: '<span class="fa fa-play"></span>',
                                added: function ($el) {
                                    $el
                                        .data('cycle-center-vert', true)
                                        .cycle({
                                            slides: 'figure'
                                        });
                                },
                                removed: function ($el) {
                                    $el.cycle('destroy');
                                }
                            }
                        },
                        actions: null
                    }
                }
            });
        });
    });

    // toogle nav 
    toggleNav();

    // custom upload file
    function uploadFile() {
        var label = $('.label-input-file');

        label.each(function() {

            var $this =  $(this);
            $this.on('click', function() {
                var input  =  $this.prev('.uploadfile'),
                    span =  $this.children('span');

                console.log(input);

                input.change(function() {   
                    var filename = $(this).val(); 
                    if (filename.substring(3,11) == 'fakepath') {
                        filename = filename.substring(12);
                    } // Remove c:\fake at beginning from localhost chrome

                   span.text(filename);
                })
            });

        })
       

        $('#select_file').click(function() {
            $('#images_up').trigger('click');
            $('#images_up').change(function() {
                var filename = $('#images_up').val();
                if (filename.substring(3,11) == 'fakepath') {
                    filename = filename.substring(12);
                } // Remove c:\fake at beginning from localhost chrome
                $('#my_file').html(filename);
            });
        });
 
    }

    function toggleNav() {
        $('body').append('<div class="gray"/>');

        $('.btn-nav').on('click', function() {

            $('body').toggleClass('openNav');

        });

       $('.gray').on('click', function() {

            $('body').removeClass('openNav');

        });

        $('.close-menu').on('click', function() {

            $('body').removeClass('openNav');

        });

    }

    
    // function open & close search
    function closeSearch() {
        $('.search').removeClass('showSearch');
    };

    function openSearch() {
        $('.search').addClass('showSearch');
    };

})(jQuery);