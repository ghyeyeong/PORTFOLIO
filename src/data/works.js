const works = [
    // HTML
    {
        id: 1,
        category: "html",
        title: "멍멍살롱 - 반려견 동반 카페 웹사이트",
        description: "HTML과 CSS를 활용해 반려견과 보호자가 함께 즐길 수 있는 애견카페를 주제로 제작한 반응형 웹사이트입니다. 메인 슬라이드와 서브페이지, 예약 폼 등을 구성하고 반응형 UI와 인터랙션을 적용했습니다.",
        image: "${import.meta.env.BASE_URL}works/html-dogsalong.png",
        skills: ["HTML", "CSS3", "JavaScript", "Swiper", "반응형 웹"],
        github: "https://github.com/ghyeyeong/HTML-dogsalong.git",
        demo: " https://ghyeyeong.github.io/HTML-dogsalong/"
    },

    {
        id: 2,
        category: "html",
        title: "HobbyCash - 취미 수익화 정보 웹사이트",
        description: "취미를 활용해 부수입을 만들고 싶은 사람들을 위한 수익화 정보 웹사이트입니다. 취미 선택부터 콘텐츠 제작, 수익화 방법까지 단계별 정보를 구성하고, 카드형 UI와 hover 인터랙션을 활용해 직관적이고 깔끔한 사용자 경험을 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/html-hobbycash.png",
        skills: ["HTML", "CSS"],
        github: "https://github.com/ghyeyeong/HTML-hobbycash.git",
        demo: " https://ghyeyeong.github.io/HTML-hobbycash/"
    },

    {
        id: 3,
        category: "html",
        title: "Green Habit - 건강한 식습관 브랜드 웹사이트",
        description: "건강한 식습관과 플랜트 기반 라이프스타일을 주제로 제작한 브랜드 웹사이트입니다. Green Habit의 브랜드 스토리와 추천 메뉴, 고객 후기 등의 콘텐츠를 구성하고, Swiper 슬라이드와 jQuery를 활용한 인터랙션 및 모바일 반응형 UI를 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/html-greenhabit.png",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper", "반응형 웹"],
        github: "https://github.com/ghyeyeong/HTML-greenhabit.git",
        demo: "https://ghyeyeong.github.io/HTML-greenhabit/"
    },

    {
        id: 4,
        category: "html",
        title: "롯데월드 - 민속박물관 반응형 웹사이트",
        description: "롯데월드 민속박물관의 메인 페이지와 서브 페이지를 구현한 반응형 웹사이트입니다. Swiper를 활용한 콘텐츠 슬라이드와 탭 메뉴, 브레드크럼 네비게이션 등 다양한 인터랙션을 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/html-lottemuseum.png",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper"],
        github: "https://github.com/ghyeyeong/HTML-lotte-museum.git",
        demo: "https://ghyeyeong.github.io/HTML-lotte-museum/"
    },

    {
        id: 5,
        category: "html",
        title: "StayMood - 힐링 스테이 반응형 웹사이트",
        description: "자연과 휴식을 콘셉트로 한 숙박 공간을 소개하는 반응형 웹사이트입니다. Swiper를 활용한 메인 슬라이드와 jQuery를 이용한 모바일 메뉴 인터랙션을 구현하고, PC·태블릿·모바일 환경에 맞춰 반응형 레이아웃을 제작했습니다.",
        image: "${import.meta.env.BASE_URL}works/html-staymood.png",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "Swiper.js", "반응형 웹"],
        github: "https://github.com/ghyeyeong/HTML-staymood.git",
        demo: "https://ghyeyeong.github.io/HTML-lotte-hotel/"
    },


    // JavaScript
    {
        id: 6,
        category: "javascript",
        title: "Stay Finder - 숙소 추천 사이트",
        description: "JSON Server의 숙소 데이터를 JavaScript로 불러와 지역별 필터링과 동적 카드 렌더링을 구현한 숙소 추천 사이트입니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-airbnb.png",
        skills: ["HTML", "CSS", "JavaScript", "Fetch API", "JSON"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-airbnb.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-airbnb/"
    },

    {
        id: 7,
        category: "javascript",
        title: "ArtiRent - 그림 렌탈 서비스",
        description: "JavaScript와 JSON 데이터를 활용해 작품 검색, 카테고리별 필터링, 가격·평점·인기순 정렬, 찜하기 기능을 구현한 반응형 그림 렌탈 웹사이트입니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-artrent.png",
        skills: ["HTML", "CSS", "JavaScript", "Fetch API", "JSON", "반응형 웹"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-artrent.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-artrent/"
    },

    {
        id: 8,
        category: "javascript",
        title: "STUDIO - 공간 예약 서비스",
        description: "JavaScript를 활용해 회원가입 유효성 검사, 프로필 작성 및 글자 수 카운트, 스튜디오 예약과 이용시간·추가옵션에 따른 실시간 결제 금액 계산 기능을 구현한 웹사이트입니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-form.png",
        skills: ["HTML", "CSS", "JavaScript", "DOM", "이벤트 처리", "폼 유효성 검사"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-form.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-form/"
    },

    {
        id: 9,
        category: "javascript",
        title: "반응형 포트폴리오 카드 갤러리",
        description: "Isotope 플러그인과 JavaScript를 활용해 불규칙한 카드 형태의 갤러리 레이아웃과 카테고리별 콘텐츠 필터링, 반응형 화면 구성을 구현한 웹사이트입니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-likepinterest.png",
        skills: ["HTML", "CSS", "JavaScript", "Isotope", "반응형 웹"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-likepinterest.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-likepinterest/"
    },

    {
        id: 10,
        category: "javascript",
        title: "인터랙티브 뮤직 플레이어",
        description: "JavaScript와 HTML5 Audio API를 활용해 음악 재생, 일시정지, 처음부터 재생 및 이전·다음 음악 전환 기능을 구현한 웹사이트입니다. 음악 재생 상태에 따라 앨범 이미지 회전 애니메이션과 활성화 상태를 동적으로 제어하고, CSS Animation을 활용해 인터랙티브한 뮤직 플레이어 UI를 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-musicplaylist.png",
        skills: ["HTML", "CSS", "JavaScript", "Audio API", "DOM", "이벤트 처리", "CSS Animation"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-musicplaylist.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-musicplaylist/"
    },

    {
        id: 11,
        category: "javascript",
        title: "RENT CAR - 렌터카 차량 조회 서비스",
        description: "JavaScript와 JSON 데이터를 활용해 차량 목록을 동적으로 생성하고, 차종별 필터링과 대여 가능 여부 및 차량 정보를 실시간으로 표시하는 렌터카 조회 웹사이트입니다.",
        image: "${import.meta.env.BASE_URL}works/javascript-rentcar.png",
        skills: ["HTML", "CSS", "JavaScript", "JSON", "Fetch API", "DOM", "이벤트 처리", "데이터 필터링", "반응형 웹"],
        github: "https://github.com/ghyeyeong/JAVASCRIPT-rentcar.git",
        demo: "https://ghyeyeong.github.io/JAVASCRIPT-rentcar/"
    },


    // jQuery
    {
        id: 12,
        category: "jquery",
        title: "PHOTO ALBUM - 이미지 갤러리",
        description: "jQuery를 활용해 썸네일 이미지를 클릭하면 해당 이미지를 메인 영역에 동적으로 표시하는 포토앨범 웹사이트입니다. 이벤트 처리와 이미지 삽입 및 삭제, 페이드 효과를 적용해 자연스러운 이미지 전환 기능을 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/jquery-photoalbum.png",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "이벤트 처리", "DOM", "이미지 전환 효과", "동적 콘텐츠 생성"],
        github: "https://github.com/ghyeyeong/JQUERY-photoalbum.git",
        demo: "https://ghyeyeong.github.io/JQUERY-photoalbum/"
    },


    // React
    {
        id: 13,
        category: "react",
        title: "MUSE SEOUL - 전시 큐레이션",
        description: "React와 React Router를 활용해 제작한 전시 큐레이션 웹사이트입니다. 전시 카테고리별 필터링과 관심 전시 등록·삭제 기능을 구현하고, 컴포넌트를 분리하여 전시 카드와 관심 전시 데이터를 효율적으로 관리했습니다.",
        image: "${import.meta.env.BASE_URL}works/react-exhibition.png",
        skills: ["React", "JavaScript", "React Router", "React Tabs", "CSS"],
        github: "https://github.com/ghyeyeong/REACT-exhibition.git",
        demo: "https://ghyeyeong.github.io/REACT-exhibition/"
    },

    {
        id: 14,
        category: "react",
        title: "RUN SHOP - 러닝 슈즈 쇼핑몰",
        description: "React를 활용해 제작한 러닝 슈즈 상품 상세 페이지입니다. 장바구니 수량 관리, 상품 이미지 확대 모달, 상세·리뷰·문의 탭 전환, 장바구니 알림 기능을 구현하며 컴포넌트 간 props 전달과 상태 관리를 경험했습니다.",
        image: "${import.meta.env.BASE_URL}works/react-mini.png",
        skills: ["React", "JavaScript", "CSS", "React Hooks"],
        github: "https://github.com/ghyeyeong/REACT-mini.git",
        demo: "https://ghyeyeong.github.io/REACT-mini/"
    },

    {
        id: 15,
        category: "react",
        title: "MY PLATE - 건강 식단 관리 웹사이트",
        description: "React의 컴포넌트와 상태 관리를 활용해 제작한 건강 식단 관리 웹사이트입니다. 식단 검색, 추천 메뉴, 이미지 슬라이더, 건강 팁 등의 기능을 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/react-myplate.png",
        skills: ["React", "JavaScript", "SCSS", "React Router", "Fetch API"],
        github: "https://github.com/ghyeyeong/REACT-myplate.git",
        demo: "https://ghyeyeong.github.io/REACT-myplate/"
    },


    // Sass
    {
        id: 16,
        category: "sass",
        title: "MORU - 가구 브랜드 쇼핑몰",
        description: "Sass를 활용해 변수, 중첩 문법, Mixin, BEM 방식으로 스타일을 체계적으로 구성한 가구 브랜드 웹사이트입니다. 메인 페이지와 상품 상세 페이지를 제작하고, 반응형 레이아웃을 적용해 다양한 화면 크기에 대응했습니다. JavaScript를 활용해 모바일 메뉴 토글, 상품 썸네일 이미지 전환, 장바구니 담기 기능을 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/sass-furniture.png",
        skills: ["HTML", "CSS", "SCSS", "Sass 변수", "Nesting", "Mixin", "BEM", "반응형 웹", "JavaScript", "이벤트 처리", "DOM 조작", "상품 이미지 전환", "모바일 메뉴", "장바구니 기능"],
        github: "https://github.com/ghyeyeong/SASS-furniture.git",
        demo: "https://ghyeyeong.github.io/SASS-furniture/"
    },

    {
        id: 17,
        category: "sass",
        title: "LATINE - 인테리어 라이프스타일 쇼핑몰",
        description: "Sass를 활용해 인테리어와 라이프스타일 제품을 소개하는 브랜드 웹사이트를 제작했습니다. Sass 변수와 Mixin을 활용해 반복되는 스타일을 효율적으로 관리하고, Grid와 Flexbox를 활용해 히어로 영역, 추천 컬렉션, 게시글, 베스트 상품 등의 콘텐츠를 구성했습니다. 반응형 레이아웃과 hover 효과를 적용해 다양한 화면에서도 자연스럽게 콘텐츠를 확인할 수 있도록 구현했습니다.",
        image: "${import.meta.env.BASE_URL}works/sass-latin.png",
        skills: ["HTML", "SCSS", "Sass", "Sass 변수", "Nesting", "반응형 웹", "UI 디자인", "Lucide Icons"],
        github: "https://github.com/ghyeyeong/SASS-latin.git",
        demo: "https://ghyeyeong.github.io/SASS-latin/"
    }
];

export default works;
