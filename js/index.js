
// ==========  Counter Section  ===============
const valuContainer = document.querySelectorAll('.value-container');

let progressValue=0;
let progressEndValue=10;
let speed=200;
const progress = setInterval(()=>{
    progressValue++;
    valuContainer[0].textContent = `${progressValue}M`;
    if(progressValue == progressEndValue){
        clearInterval(progress)
    }
}, speed)

// ---------- 2nd Counter --------------
let progressValue1=0;
let progressEndValue1=25;
let speed1=80;
const progress1 = setInterval(()=>{
    
    progressValue1++;
    valuContainer[1].textContent = `${progressValue1}K`;
    if(progressValue1 == progressEndValue1){
        clearInterval(progress1)
    }
}, speed1)

// ------------- 3rd Counter ---------------
let progressValue2=0;
let progressEndValue2=9;
let speed2=210;
const progress2 = setInterval(()=>{
    
    progressValue2++;
    valuContainer[2].textContent = `${progressValue2}M`;
    if(progressValue2 == progressEndValue2){
        clearInterval(progress2)
    }
}, speed2)

// ----------- 4th Counter --------------------
let progressValue3=0;
let progressEndValue3=23;
let speed3=90;
const progress3 = setInterval(()=>{
    
    progressValue3++;
    valuContainer[3].textContent = `${progressValue3}K`;
    if(progressValue3 == progressEndValue3){
        clearInterval(progress3)
    }
}, speed3)


// =================  Slider  ==================

$('.team-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    Infinity:true,
    swipeToSlide:true,
    arrows:false,
    dots:true,
  
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  
// ===================  FAQ Part  =================================

// Show/Hide FAQs answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'fas fa-plus'){
            icon.className = 'fas fa-minus';
        }
        else{
            icon.className = 'fas fa-plus';
        }

    });
});



// =====================================================================

















