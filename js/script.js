$(function(){
    $('.menulist').hide();
    $('#cakeList').show();

    $('.bestproduct_menu li a').click(function(){
        let activeId = $(this).attr('id');
        $('.menulist').hide();
        switch(activeId){
            case 'menu_list1':
                $('#totalList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list2':
                $('#breadList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list3':
                $('#cakeList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list4':
                $('#deliList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list5':
                $('#dessertList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list6':
                $('#giftList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            case 'menu_list7':
                $('#drinkList').show();
                $('.bestproduct_menu li a').removeClass('menu_on');
                $('#'+activeId).addClass('menu_on');
                break;
            default:
                $('.menulist').hide();
                break;
        }
        
    });
});


//모바일 메뉴
$(function(){

    let scrollTop = 0;
    $('.gnb_m_container').hide();

    $('#mobileMenu').click(function(){
         scrollTop = window.scrollY || document.documentElement.scrollTop;

        $('body')
            .addClass('no-scroll')
            .css('top', `-${scrollTop}px`);

        $('#headerContainer').hide();
        $('.gnb_m_container').show();
    });
    $('#mobileMenuCloseBtn').click(function(){

         $('body')
            .removeClass('no-scroll')
            .css('top', '');

        window.scrollTo(0, scrollTop); // 스크롤 복원
        
        $('.gnb_m_container').hide();
        $('#headerContainer').show();
        $('body').removeClass('no-scroll');
    });

});


// 스크롤 메뉴
$(function(){

    $('.scroll_btn_container').css("display","none");
    
    $(window).on("scroll",function(){
        
        let bannerHeight = $('.section_banner').height();
        let currentScroll = $(this).scrollTop();

        if(currentScroll>bannerHeight){
            $('.scroll_btn_container').css("display","");
        }else{
            $('.scroll_btn_container').css("display","none");
        }


    });


});


// 웹 메뉴 스크롤
$(function(){
    let lastScrollTop = 0;
    let bannerHeight = $('.section_banner').height();

    $(window).on("scroll", function(){

        let currentScroll = $(this).scrollTop();
        if(currentScroll > bannerHeight){
            if(currentScroll > lastScrollTop){
                $('#headerContainer').css("top","-80px");
                $('.header_lnb_container').stop().hide();
            }else if(currentScroll < lastScrollTop){
                $('#headerContainer').css("top","0");
            }else{
                $('#headerContainer').css("top","0");
            }
            lastScrollTop = currentScroll;
        }else{
            $('#headerContainer').css("top","0");
            lastScrollTop = currentScroll;
        }
        
    });

});

// 서브메뉴(lnb)
$(function(){

    $('.header_lnb_container').hide();

    $('.gnb li a, .header_lnb_container').mouseenter(function(){

        $('.header_lnb_container').stop().slideDown();
    });

    $('.lnb_item li').mouseenter(function(){

        let lnbMenuNum = $(this).parent().attr('id');
        
        switch(lnbMenuNum){
            case 'lnb_item1':
                $('.gnb li a').removeClass('gnb_on');
                $('#gnb1').addClass('gnb_on');
                break;
            case 'lnb_item2':
                $('.gnb li a').removeClass('gnb_on');
                $('#gnb2').addClass('gnb_on');
                break;
            case 'lnb_item3':
                $('.gnb li a').removeClass('gnb_on');
                $('#gnb3').addClass('gnb_on');
                break;
            case 'lnb_item4':
                $('.gnb li a').removeClass('gnb_on');
                $('#gnb4').addClass('gnb_on');
                break;
            case 'lnb_item5':
                $('.gnb li a').removeClass('gnb_on');
                $('#gnb5').addClass('gnb_on');
                break;
            default:
                console.log('lnb 오류');
                break;
        }

    });

    $('.lnb_item li').mouseleave(function(){
        $('.gnb li a').removeClass('gnb_on');
    });

    $('.gnb, .header_lnb_container').mouseleave(function(){

        $('.header_lnb_container').stop().slideUp();
        $('.gnb li a').removeClass('gnb_on');

    });

});



// 푸터 아코디언
$(function(){

    $('.fnb_m_content').hide();

    $('.fnb_m li .fnb_m_title').click(function(){
        let titlenum = $(this).attr('id')
        
        switch(titlenum){
            case 'fnbMnum1':
                if($('#fnbMcontentnum1').is(':visible')){
                    $('#fnbMcontentnum1').slideUp();
                    $('#fnbMicon1').removeClass('rotateicon0').addClass('rotateicon180');
                }else{
                    $('.fnb_m_content').hide();
                    $('#fnbMicon1').removeClass('rotateicon180').addClass('rotateicon0');
                    $('#fnbMcontentnum1').slideDown();
                }
                break;
                case 'fnbMnum2':
                    if($('#fnbMcontentnum2').is(':visible')){
                        $('#fnbMcontentnum2').slideUp();
                    $('#fnbMicon2').removeClass('rotateicon0').addClass('rotateicon180');
                }else{
                    $('.fnb_m_content').hide();
                    $('#fnbMicon2').removeClass('rotateicon180').addClass('rotateicon0');
                    $('#fnbMcontentnum2').slideDown();
                }
                break;
                case 'fnbMnum3':
                    if($('#fnbMcontentnum3').is(':visible')){
                        $('#fnbMcontentnum3').slideUp();
                        $('#fnbMicon3').removeClass('rotateicon0').addClass('rotateicon180');
                    }else{
                        $('.fnb_m_content').hide();
                        $('#fnbMicon3').removeClass('rotateicon180').addClass('rotateicon0');
                        $('#fnbMcontentnum3').slideDown();
                }
                break;
            default:
                console.log("푸터 메뉴 오류");
        }
    });

});


// 뉴스내용
$(function(){

    let noticeContent = ['9월 16일 뚜레쥬르 서비스 정기점검 안내','CJ푸드빌 영상정보처리기기 운영/관리방침 개정 고지','CJ푸드빌 개인정보처리방침 개정 고지','8월 22일 뚜레쥬르 22% 할인 행사 진행 매장 리스트']
    let noticeDate = ['2025.09.15','2025.09.05','2025.09.05','2025.08.20']

    let index = 0;
    let intervalId;

    function showNotice(idx){
        $('#noticeContent').text(noticeContent[index]);
        $('#noticeDate').text(noticeDate[index]);
    }


    showNotice(index);


    function startAutoSlide(){
        intervalId = setInterval(function(){
            index = (index+1) % noticeContent.length;
            showNotice(index);
        },5000);
    }

    startAutoSlide();

     $('#noticeNextBtn').click(function(){
        clearInterval(intervalId); 
        index = (index + 1) % noticeContent.length;
        showNotice(index);
        startAutoSlide(); 
    });

    $('#noticePrevBtn').click(function(){
        clearInterval(intervalId);
        index = (index - 1 + noticeContent.length) % noticeContent.length;
        showNotice(index);
        startAutoSlide(); 
    });

});


// 뚜레쥬르 스토리
$(function(){
    const $track = $('.story_track'); // 아이템들이 있는 트랙 컨테이너
    const itemWidth = 644 + 32; // 아이템 너비 + margin-right
    const itemCount = $('.story_list').length; // 전체 아이템 개수
    const visibleCount = Math.floor($('.story_list_container').width() / itemWidth); // 한 번에 보여지는 아이템 수
    let currentIndex = 0;  // 첫 번째 아이템이 반만 보이도록 설정

    // 페이지 로드 시, 첫 번째 아이템이 반만 보이게 초기 위치 설정
    $track.css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');

    // Next 버튼 클릭 시
    $('#storyNextvBtn').click(function(e){
        e.preventDefault();

        // currentIndex가 마지막 인덱스를 넘지 않도록
        if(currentIndex < itemCount - visibleCount - 1) {  // 마지막 아이템까지 처리
            currentIndex++;
            $track.css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');
        }
    });

    // Prev 버튼 클릭 시
    $('#storyPrevBtn').click(function(e){
        e.preventDefault();

        // currentIndex가 0보다 작아지지 않도록
        if(currentIndex > -1) {
            currentIndex--;
            $track.css('transform', 'translateX(' + (-itemWidth * currentIndex) + 'px)');
        }
    });
});