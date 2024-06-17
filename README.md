## Design Guide
```
1. KEYWORD
#깔끔한 #트렌디한 #개성있는
2. COLOR
#065EA2 , #4BACDB , #FFCE6C
- 라라스윗의 로고 컬러를 사용해 브랜드 아이덴티티를 살렸습니다.
- 시원한 느낌을 주는 파란색과 노란색을 함께 사용하여 아이스크림을 연상시키고자 했습니다.
3. FONT
- 영문 폰트 : Mango Grotesque
- 한글 메인 : 지마켓 산스
- 한글 서브: 프리텐다드
```
## Publishing Guide
```
1. 통일된 식별자명을 위해 케밥 표기법 사용
ex) main-container

2. 주석
/***** header, main, footer *****/, <!-- ***** header, main, footer ***** -->
/*** section ***/, <!-- *** section *** -->
/* 그 외 */, <!-- * 그 외 * -->

3. class명 표기법
container > wrapper > content > box
```
# LALASWEET 작업 일지
## 240617
* 반응형 웹에서 폰트 사이즈 단위로 vw를 사용하면 안 된다는 것을 알게 되어 다시 px로 바꾸고 미디어 쿼리를 세밀하게 설정하여 수정함

## 240614
* about-buy-box, ad-buy-box, support-container a hover 이벤트 구현
* favicon 작업
* open graph 작업

## 240613
* index.css, index-pc.css 수정
* swiper 플러그인을 사용해 info-container section의 스와이퍼 구현
* gnb 메뉴 구현
* github 이동 영역 변경
* index.js 완성

## 240612
* index.css 수정
* index-pc.css 완성
* css 작업 도중 info-content의 구조가 잘못되었다는 사실을 발견해 구조 수정
* index.js 작업
* gsap의 scrollTrigger 플러그인을 사용해 parallax text 애니메이션 구현
* gsap의 scrollTrigger 플러그인을 사용해 row-line-box의 span들이 스크롤에 따라 좌우로 이동하며 기울기가 조절되는 애니메이션 구현
* gsap의 scrollTrigger 플러그인을 사용해 col-line-box의 span들이 스크롤에 따라 상하로 이동하는 애니메이션 구현
* gsap의 scrollTrigger 플러그인을 사용해 point-color가 스크롤에 따라 상하로 이동하는 애니메이션 구현

## 240611
* index.css 수정
* index-pc.css 작업
* pc 버전에서 윈도우 사이즈 조절 시 폰트 사이즈 때문에 레이아웃이 망가지는 문제 발생 -> 글자 크기를 px에서 vw로 변경해 해결

## 240610
* index.css 완성
* index-pc.css 작업

## 240609
* index.css 작업

## 240608
* mobile 디자인 완성
* 마크업 작업
* 퍼블리싱 가이드 작성
* common.css 작성
* index.html 작성

## 240607
* pc 디자인 완성
* mobile 디자인 시작
* 사용하고자 하는 이미지가 저화질밖에 없는 문제 발생 -> 이미지 고화질 변환 사이트를 이용해 이미지의 화질을 올려 해결

## 240606
* pc 디자인

## 240605
* 디자인 가이드 작성
* pc 디자인 시작

## 240604
* 개인 프로젝트 레퍼런스 사이트 서치
* 브랜드 리서치
