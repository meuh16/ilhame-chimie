

      
// window.addEventListener('scroll', () => {
//   const observer1 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.def1 ul');
//       const title = entry.target.querySelector('.def1 h1');
//       const imgo = entry.target.querySelector('.show1 img');
//       square.style.opacity = 0
//       title.style.opacity = 0
//       imgo.style.opacity = 0
//       if (entry.isIntersecting && entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {
//         square.classList.add('animate__fadeInUp', 'animate__delay-1s');
//         title.classList.add('animate__fadeInDown', 'animate__delay-1s');
//         imgo.classList.add('animate__fadeInLeft', 'animate__delay-0s');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       //imgo.classList.remove('animate__fadeInRight');
//       //square.classList.remove('animate__fadeInLeft');
//     });
//   });

//   const observer2 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       console.log(entry.intersectionRatio)
//       const square = entry.target.querySelector('.def2 ul');
//       const title = entry.target.querySelector('.def2 h1');
//       const imgo = entry.target.querySelector('.show2 img');
//       square.style.opacity = 0
//       title.style.opacity = 0
//       imgo.style.opacity = 0
  
//       if (entry.isIntersecting && entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {
//         square.classList.add('animate__fadeInUp', 'animate__delay-1s');
//         title.classList.add('animate__fadeInDown', 'animate__delay-1s');
//         imgo.classList.add('animate__fadeInRight', 'animate__delay-0s');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       // imgo.classList.remove('animate__fadeInRight');
//       // square.classList.remove('animate__fadeInLeft');
//     });
//   });


//   const observer3 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.def3 ul');
//       const title = entry.target.querySelector('.def3 h1');
//       const imgo = entry.target.querySelector('.show3 img');
//       square.style.opacity = 0
//       title.style.opacity = 0
//       imgo.style.opacity = 0
  
//       if (entry.isIntersecting && entry.intersectionRatio > 0.6 && entry.intersectionRatio < 0.7) {
//         square.classList.add('animate__fadeInUp', 'animate__delay-1s');
//         title.classList.add('animate__fadeInDown', 'animate__delay-1s');
//         imgo.classList.add('animate__fadeInLeft', 'animate__delay-0s');
//       return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       //imgo.classList.remove('animate__fadeInRight');
//       //square.classList.remove('animate__fadeInLeft');
//     });
//   });

//   const observer4 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.def4 ul');
//       const title = entry.target.querySelector('.def4 h1');
//       const imgo = entry.target.querySelector('.show4 img');
//       square.style.opacity = 0
//       title.style.opacity = 0
//       imgo.style.opacity = 0
  
//       if (entry.isIntersecting && entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {
//         square.classList.add('animate__fadeInUp', 'animate__delay-1s');
//         title.classList.add('animate__fadeInDown', 'animate__delay-1s');
//         imgo.classList.add('animate__fadeInRight', 'animate__delay-0s');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       //square.classList.remove('animate__fadeInLeft');
//       //imgo.classList.remove('animate__fadeInRight');
//     });
//   });

//   const observer5 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       console.log('entry')
//       console.log(entry)
//       const o1 = entry.target.querySelector('.obj1');
//       const o2 = entry.target.querySelector('.obj2');
//       const o3 = entry.target.querySelector('.obj3');
//       o1.style.opacity = 0
//       o2.style.opacity = 0
//       o3.style.opacity = 0
  
//       if (entry.isIntersecting && entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {
//         o1.classList.add('animate__fadeIn', 'animate__delay-0s');
//         o2.classList.add('animate__fadeIn', 'animate__delay-1s');
//         o3.classList.add('animate__fadeIn', 'animate__delay-2s');
//         return;// if we added the class, exit the function
//       }
//     });
//   });


//   const observer6 = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const o1 = entry.target.querySelector('.pkVerni h4');
//       const o2 = entry.target.querySelector('.pkVerni P');
//       const o3 = entry.target.querySelectorAll('.pkVerni h6');
//       o1.style.opacity = 0
//       o2.style.opacity = 0
//       o3.forEach(element => {
//         element.style.opacity = 0
//       });
//       if (entry.isIntersecting  && entry.intersectionRatio > 0.5 && entry.intersectionRatio < 0.6) {
//         o1.classList.add('animate__fadeInUp');
//         o2.classList.add('animate__fadeInUp', 'animate__delay-1s');
//         o3.forEach(element => {
//           element.classList.add('animate__fadeInUp', 'animate__animated', 'animate__delay-1s');
//         });
//         //o3.classList.add('animate_animated', 'animate__fadeInRUp');
//         return;// if we added the class, exit the function
//       }  
//     })
//   })

//       const observer7 = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//           console.log(entry)
//           const o1 = entry.target.querySelector('.types .typesIcon');
//           const o2 = entry.target.querySelector('.types .typesDesc');
//           o1.classList.add('animate__fadeInUp');
//           o2.classList.add('animate__fadeInUp', 'animate__delay-1s');
        
//           if (entry.isIntersecting && entry.intersectionRatio > 0.3 && entry.intersectionRatio < 0.7) {
//             o1.classList.add('animate__fadeInLeft');
//             o2.classList.add('animate__fadeInLeft', 'animate__delay-1s');
//             return;// if we added the class, exit the function
//           }
//         });
//       });

//       const observer8 = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//           const o1 = entry.target.querySelector('.conseil .typesIcon');
//           const o2 = entry.target.querySelector('.conseil .typesDesc');
//           o1.classList.add('animate__fadeInUp');
//           o2.classList.add('animate__fadeInUp', 'animate__delay-1s');
        
//           console.log(entry.intersectionRatio)
//           if (entry.isIntersecting && entry.intersectionRatio > 0.5 && entry.intersectionRatio < 0.7 ) {
//             o1.classList.add( 'animate__animated', 'animate__fadeInRight');
//             o2.classList.add( 'animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
//             return;// if we added the class, exit the function
//           }
//         });
//       });


//   observer1.observe(document.querySelector('.product1'));
//   observer2.observe(document.querySelector('.product2'));
//   observer3.observe(document.querySelector('.product3'));
//   observer4.observe(document.querySelector('.product4'));
//   observer5.observe(document.querySelector('.objects'));
//   observer6.observe(document.querySelector('.pkVerni'));
//   observer7.observe(document.querySelector('.types'));
//   observer8.observe(document.querySelector('.conseil'));


// })
      

      const observer1 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.def1 ul');
          const title = entry.target.querySelector('.def1 h1');
          const imgo = entry.target.querySelector('.show1 img');
       
          if (entry.isIntersecting) {
            square.classList.add('animate__fadeInUp', 'animate__delay-1s');
            title.classList.add('animate__fadeInDown', 'animate__delay-1s');
            imgo.classList.add('animate__fadeInLeft', 'animate__delay-0s');
            return; // if we added the class, exit the function
          }
        });
      });
    
      const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log(entry.intersectionRatio)
          const square = entry.target.querySelector('.def2 ul');
          const title = entry.target.querySelector('.def2 h1');
          const imgo = entry.target.querySelector('.show2 img');
      
      
          if (entry.isIntersecting) {
            square.classList.add('animate__fadeInUp', 'animate__delay-1s');
            title.classList.add('animate__fadeInDown', 'animate__delay-1s');
            imgo.classList.add('animate__fadeInRight', 'animate__delay-0s');
            return; // if we added the class, exit the function
          }
        });
      });
    
    
      const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.def3 ul');
          const title = entry.target.querySelector('.def3 h1');
          const imgo = entry.target.querySelector('.show3 img');
   
      
          if (entry.isIntersecting ) {
            square.classList.add('animate__fadeInUp', 'animate__delay-1s');
            title.classList.add('animate__fadeInDown', 'animate__delay-1s');
            imgo.classList.add('animate__fadeInLeft', 'animate__delay-0s');
          return; // if we added the class, exit the function
          }
        });
      });
    
      const observer4 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const square = entry.target.querySelector('.def4 ul');
          const title = entry.target.querySelector('.def4 h1');
          const imgo = entry.target.querySelector('.show4 img');
      
          if (entry.isIntersecting) {
            square.classList.add('animate__fadeInUp', 'animate__delay-1s');
            title.classList.add('animate__fadeInDown', 'animate__delay-1s');
            imgo.classList.add('animate__fadeInRight', 'animate__delay-0s');
            return; // if we added the class, exit the function
          }
      
        });
      });
    
      const observer5 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          console.log('entry')
          console.log(entry)
          const o1 = entry.target.querySelector('.obj1');
          const o2 = entry.target.querySelector('.obj2');
          const o3 = entry.target.querySelector('.obj3');
      
          if (entry.isIntersecting ) {
            o1.classList.add('animate__fadeIn', 'animate__delay-1s');
            o2.classList.add('animate__fadeIn', 'animate__delay-1s');
            o3.classList.add('animate__fadeIn', 'animate__delay-1s');
            return;// if we added the class, exit the function
          }
        });
      });
    
    
      const observer6 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const o1 = entry.target.querySelector('.pkVerni h4');
          const o2 = entry.target.querySelector('.pkVerni P');
          const o3 = entry.target.querySelectorAll('.pkVerni h6');
          
          if (entry.isIntersecting ) {
            o1.classList.add('animate__fadeInUp');
            o2.classList.add('animate__fadeInUp', 'animate__delay-1s');
            o3.forEach(element => {
              element.classList.add('animate__fadeInUp', 'animate__animated', 'animate__delay-1s');
            });
            //o3.classList.add('animate_animated', 'animate__fadeInRUp');
            return;// if we added the class, exit the function
          }  
        })
      })
    
          const observer7 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              console.log(entry)
              const o1 = entry.target.querySelector('.types .typesIcon');
              const o2 = entry.target.querySelector('.types .typesDesc');
              if (entry.isIntersecting ) {
                o1.classList.add('animate__fadeInLeft');
                o2.classList.add('animate__fadeInLeft', 'animate__delay-1s');
                return;// if we added the class, exit the function
              }
            });
          });
    
          const observer8 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              const o1 = entry.target.querySelector('.conseil .typesIcon');
              const o2 = entry.target.querySelector('.conseil .typesDesc');
            
              if (entry.isIntersecting) {
                o1.classList.add( 'animate__animated', 'animate__fadeInRight');
                o2.classList.add( 'animate__animated', 'animate__fadeInRight', 'animate__delay-1s');
                return;// if we added the class, exit the function
              }
            });
          });
    
    
      observer1.observe(document.querySelector('.product1'));
      observer2.observe(document.querySelector('.product2'));
      observer3.observe(document.querySelector('.product3'));
      observer4.observe(document.querySelector('.product4'));
      observer5.observe(document.querySelector('.objects'));
      observer6.observe(document.querySelector('.pkVerni'));
      observer7.observe(document.querySelector('.types'));
      observer8.observe(document.querySelector('.conseil'));
     

      
 


  







  var swiper = new Swiper(".product-slider", {
    spaceBetween: 30,
    effect: "fade",
    // initialSlide: 2,
    loop: false,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
      init: function () {
        var index = this.activeIndex;
  
        var target = $(".product-slider__item").eq(index).data("target");
  
        console.log(target);
  
        $(".product-img__item").removeClass("active");
        $(".product-img__item#" + target).addClass("active");
      }
    }
  });
  
  swiper.on("slideChange", function () {
    var index = this.activeIndex;
  
    var target = $(".product-slider__item").eq(index).data("target");
  
    console.log(target);
  
    $(".product-img__item").removeClass("active");
    $(".product-img__item#" + target).addClass("active");
  
    if (swiper.isEnd) {
      $(".prev").removeClass("disabled");
      $(".next").addClass("disabled");
    } else {
      $(".next").removeClass("disabled");
    }
  
    if (swiper.isBeginning) {
      $(".prev").addClass("disabled");
    } else {
      $(".prev").removeClass("disabled");
    }
  });
  
  $(".js-fav").on("click", function () {
    $(this).find(".heart").toggleClass("is-active");
  });
  
  


  // $(document).ready(function(){
  //   var state = false,
  //       links = $('.navbar-responsive__link')
  //   $('#nav-icon3').click(function(){
  //     $(this).toggleClass('open');
  //     if(!state) {
  //       $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
  //       state = true
  //     } else {
  //       $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
  //       state = false
  //     }
      
  //   })

  //   $.each(links, function(index,value){
  //     value.addEventListener("click",function(){
  //       console.log(state)
  //       if(!state) {
  //         $('.navbar-responsive').css("transform", "translate3d(0,0,0)")
  //         state = true
  //       } else {
  //         $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
  //         state = false
  //       }
  //       $('#nav-icon3').removeClass('open')
  //     })
  //   })
  // })

  const icon = document.querySelector('#nav-icon3').addEventListener('click', () => {
    console.log("....", document.querySelector('#nav-icon3').className)
     if(document.querySelector('#nav-icon3').className == ''){
      console.log('close')
      $('#nav-icon3').addClass('open')
      $('.navbar-responsive').css("transform", "translate3d(-0%,0,0)")
     }else{
      console.log('open')
      $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
      $('#nav-icon3').removeClass('open')
      
     }
  })
  
  const links = document.querySelectorAll('.navbar__link')
  links.forEach(element => {
      element.addEventListener('click', () => {
        $('.navbar-responsive').css("transform", "translate3d(-100%,0,0)")
        $('#nav-icon3').removeClass('open')
      })
  })