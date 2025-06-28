

function heroCarousel() {
    return {
        currentIndex: 0,
        slidesCount: 3, // Update this to match your number of slides
      
        slides: [
            {
                title: "Releasing HR's full potential",
                description: "Tailored to suit your nedds today and tomorrow, ELMO's one-stop HRIS fits your specific HR processes and workflows",
                buttons: [
                    { 
                        text: "Get Started", 
                        href: "#", 
                        class: "text-white bg-green-500  font-medium hover:bg-green-600 transition-colors" 
                    },
                    { 
                        text: "Watch Overview", 
                        href: "#", 
                        class: "text-white border border-white font-medium  hover:bg-white hover:text-gray-800 transition-colors" 
                    }
                ],
                image: "./images/Home-HeroNew-03a.webp"
            },
            {
                title: "ElMO's 2025 hr industry benchmark report",
                description: "Our flagship report in now in its sixth year. We unpack the biggest workforce treands shaping organisations in Australia and New Zealand-- Ai doption, hybrid work, and talent retention as Gen Z emerges as a dominant employee group.",
                buttons: [
                    { 
                        text: "Download Now", 
                        href: "#", 
                        class: "text-white  bg-green-500  font-medium  hover:bg-green-600 transition-colors" 
                    }
                ],
                image: "./images/HRIB-Report-2025-AU-HomeSlide (1).webp"
            },
            {
                title: "Latest Employee sentiment Index",
                description: "How does your remuneration framework stack up against employee expectations? Discover how Aussies feel about their pay rises, what drives them, nd what the value beyond the paycheck.",
                buttons: [
                    { 
                        text: "vue report", 
                        href: "#", 
                        class: "text-white  bg-green-500  font-medium  hover:bg-green-600 transition-colors" 
                    }
                ],
                image: "./images/ESI-Q1-2025-AU-HomeSlide (1).webp"
            }
        ],
        interval: null,
        isDragging: false,
        startX: 0,
        dragThreshold: 50,
        autoplayInterval: 5000,

        init() {
            this.start();
            this.slidesCount = this.$refs.slider.children.length;
        },

        start() {
            this.stop(); // Clear existing interval
            this.interval = setInterval(() => this.next(), this.autoplayInterval);
        },

        stop() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },

        next() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            // this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },

        prev() {
            return
            // this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },

        goTo(index) {
            this.currentIndex = index;
        },

        // Touch/Mouse drag handling
        startDrag(e) {
            this.stop();
            this.isDragging = true;
            this.startX = e.clientX || e.touches[0].clientX;
        },

        onDrag(e) {
           

            if (!this.isDragging) return;

            const currentX = e.clientX || e.touches[0].clientX;
            const diff = this.startX - currentX;
        
            if (diff > this.dragThreshold) {
                this.isDragging = false;
                this.next(); // only allow forward
            }
        },

        endDrag() {
            this.isDragging = false;
            this.start();
        },

        // Cleanup when component is removed
        destroy() {
            this.stop();
        }
    }
}


    function productAccordionData() {
      return {
          open: 0,
          active: 0,
          toggle(index) {
              if (this.open === index) {
                  this.open = null; 
              } else {
                  this.open = index;
                  this.active = index;
              }
          },
          items: [
              {
                  title: 'Payroll',
                  description: 'Deliver accurate payroll with a secure cloud-based payroll software that’s configured to suit the needs of your Organisation.',
                  image: './images/Payroll-CLP-1.webp',
                  cards: [
                      {
                          icon: './images/ELMO_Icon_ReducedCost-to-Hire_COLOUR.webp',
                          text: 'Less admin, more accuracy'
                      },
                      {
                          icon: './images/ELMO_Icon_EnhancedCompliance_COLOUR.webp',
                          text: 'Enhanced compliance'
                      },
                      {
                          icon: './images/ELMO_Icon_RealTimeCustomisedReporting_COLOUR.webp',
                          text: 'Real-time reporting'
                      }
                  ]
              },
              {
                  title: 'HR Core',
                  description: 'Centralise and automate your people management with an HR software solution that’s built to suit the needs of your business.',
                  image: './images/HRCore-CLP-1.webp',
                  cards: [
                      {
                          icon: './images/ELMO_Icon_ReducedTime-to-Hire_COLOUR.webp',
                          text: 'Employee self-service (ESS)'
                      },
                      {
                          icon: './images/ELMO_Icon_RealTimeCustomisedReporting_COLOUR (1).webp',
                          text: 'Single source of truth for employee data'
                      },
                      {
                          icon: './images/ELMO_Icon_IntegratedSecure_COLOUR.webp',
                          text: 'Trusted Data Protection'
                      }
                  ]
              },
              {
                  title: 'Recruitment',
                  description: 'Find the right talent and reduce time to hire by automating your recruitment functions.',
                  image: './images/Recruit-CLP-1.webp',
                  cards: [
                      {
                          icon: './images/ELMO_Icon_ReducedCost-to-Hire_COLOUR (1).webp',
                          text: 'Fill roles faster and reduce costs'
                      },
                      {
                          icon: './images/ELMO_Icon_HireToRetireInsights_COLOUR.webp',
                          text: 'Great candidate experiences'
                      },
                      {
                          icon: './images/ELMO_Icon_EmployeeFlightRisk_COLOUR (1).webp',
                          text: 'Move the right talent forward'
                      }
                  ]
              
              },
              {
                title: 'Onboarding',
                description: 'Give your new hires the best possible start, and make first impressions count.',
                image: './images/Onboarding-CLP-1.webp',
                cards: [
                    {
                        icon: './images/ELMO_Icon_SaveTimeMoney_COLOUR.webp',
                        text: 'Reduce time-to-productivity'
                    },
                    {
                        icon: './images/ELMO_Icon_SimplifiedAutomatedWorkflows_COLOUR.webp',
                        text: 'Streamline onboarding essentials'
                    },
                    {
                        icon: './images/ELMO_Icon_SmoothPathNewHires_COLOUR.webp',
                        text: 'Track the whole process'
                    }
                ]
            
              },
              {
                title: 'Performance Management',
                description: 'Drive meaningful conversations that empower your employees to achieve their goals.',
                image: './images/Perform-CLP-1.webp',
                cards: [
                    {
                        icon: './images/ELMO_Icon_IndepthReports_COLOUR.webp',
                        text: 'Team reporting and insights'
                    },
                    {
                        icon: './images/ELMO_Icon_ComprehensiveLearnerEvaluation_COLOUR.webp',
                        text: 'Set goals and collaborate'
                    },
                    {
                        icon: './images/ELMO_Icon_HireToRetireInsights_COLOUR (1).webp',
                        text: 'Mitigate turnover risks'
                    }
                ]
            
              },
              {
                title: 'Learning Management',
                description: 'Keep employee skills relevant and your business compliant.',
                image: './images/Learning-CLP-1.webp',
                cards: [
                    {
                        icon: './images/ELMO_Icon_SimplePublishing_COLOUR.webp',
                        text: 'Create a culture of learning'
                    },
                    {
                        icon: './images/ELMO_Icon_IndepthReports_COLOUR (1).webp',
                        text: 'Powerful reporting and insights'
                    },
                    {
                        icon: './images/ELMO_Icon_PredictivePeopleAnalytics_RGB.webp',
                        text: 'Boost employee engagement'
                    }
                ]
            
                }
          ]
      };
  }
  
//   customer review slider

document.addEventListener('alpine:init', () => {
    Alpine.data('slider', () => ({
        currentIndex: 0,
        images: [
            './images/Emma-Liston-Lipman-01.jpg',
            './images/Wendy_Baker-Brosnan.jpg',
            './images/ScottDalby-BG-1.jpg'
        ],
      slidesCount: 3, // Update this to match your number of slides
      
      init() {
        // Calculate slides count automatically based on children
        this.slidesCount = this.$refs.slider.children.length;
      },
      
      next() {
        if (this.currentIndex < this.slidesCount - 1) {
          this.currentIndex++;
        }
      },
      
      prev() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      
      goToSlide(index) {
        this.currentIndex = index;
      }
    }));
})
  
// testmonials cusrosel

var swiper = new Swiper('.testmonials-swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween: 30,
        },
    }
});

var swiper = new Swiper('.review-swipper-container', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },

        1536: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    }
});

