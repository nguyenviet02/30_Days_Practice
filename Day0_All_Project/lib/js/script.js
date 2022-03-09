const project_container = document.querySelector('.projects-container');


const app = {
  projects: [
    {
      name: "Card Product",
      tag: "Project 1",
      image: "./Day0_All_Project/images/Day_1.png",
      link_demo: "./Day1_CardProduct/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day1_CardProduct",
    },
    {
      name: "Profile Card",
      tag: "Project 2",
      image: "./Day0_All_Project/images/Day_2.png",
      link_demo: "./Day2_Profile-card/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day2_Profile-card",
    },
    {
      name: "Popup",
      tag: "Project 3",
      image: "./Day0_All_Project/images/Day_3.png",
      link_demo: "./Day3_Popup/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day3_Popup",
    },
    {
      name: "Gallery",
      tag: "Project 4",
      image: "./Day0_All_Project/images/Day_4.png",
      link_demo: "./Day4_Gallery/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day4_Gallery",
    },
    {
      name: "Searchbox",
      tag: "Project 5",
      image: "./Day0_All_Project/images/Day_5.png",
      link_demo: "./Day5_Searchbox/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day5_Searchbox",
    },
    {
      name: "Detected Key",
      tag: "Project 6",
      image: "./Day0_All_Project/images/Day_6.png",
      link_demo: "./Day6_DetectedKey/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day6_DetectedKey",
    },
    {
      name: "Search Tag",
      tag: "Project 7",
      image: "./Day0_All_Project/images/Day_7.png",
      link_demo: "./Day7_SearchTag/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day7_SearchTag",
    },
    {
      name: "Register Form",
      tag: "Project 8",
      image: "./Day0_All_Project/images/Day_8.png",
      link_demo: "./Day8_Register_Form/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day8_Register_Form",
    },
    {
      name: "Weather App",
      tag: "Project 9",
      image: "./Day0_All_Project/images/Day_9.png",
      link_demo: "./Day9_WeatherApp/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day9_WeatherApp",
    },
    {
      name: "Todo List",
      tag: "Project 10",
      image: "./Day0_All_Project/images/Day_10.png",
      link_demo: "./Day10_TodoList/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day10_TodoList",
    },
    {
      name: "Toast Notification",
      tag: "Project 11",
      image: "./Day0_All_Project/images/Day_11.png",
      link_demo: "./Day11_Toast-notification/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day11_Toast-notification",
    },
    {
      name: "Range Slider",
      tag: "Project 12",
      image: "./Day0_All_Project/images/Day_12.png",
      link_demo: "./Day12_Range-Slider/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day12_Range-Slider",
    },
    {
      name: "Preview Image",
      tag: "Project 13",
      image: "./Day0_All_Project/images/Day_13.png",
      link_demo: "./Day13_Preview-Image/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day13_Preview-Image",
    },
    {
      name: "Slide Show",
      tag: "Project 14",
      image: "./Day0_All_Project/images/Day_14.png",
      link_demo: "./Day14_Slide-Show/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day14_Slide-Show",
    },
    {
      name: "Live Filter",
      tag: "Project 15",
      image: "./Day0_All_Project/images/Day_15.png",
      link_demo: "./Day15_Live-Filter/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day15_Live-Filter",
    },
    {
      name: "Show On Scroll",
      tag: "Project 16",
      image: "./Day0_All_Project/images/Day_16.png",
      link_demo: "./Day16_ShowOnScroll/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day16_ShowOnScroll",
    },
    {
      name: "Counter Up",
      tag: "Project 17",
      image: "./Day0_All_Project/images/Day_17.png",
      link_demo: "./Day17_CounterUp/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day17_CounterUp",
    },
    {
      name: "Drag and Drop",
      tag: "Project 18",
      image: "./Day0_All_Project/images/Day_18.png",
      link_demo: "./Day18_Drag-and-Drop/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day18_Drag-and-Drop",
    },
    {
      name: "Canvas",
      tag: "Project 19",
      image: "./Day0_All_Project/images/Day_19.png",
      link_demo: "./Day19_Canvas/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day19_Canvas",
    },
    {
      name: "Type Animation",
      tag: "Project 20",
      image: "./Day0_All_Project/images/Day_20.png",
      link_demo: "./Day20_Typing-Animation/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day20_Typing-Animation",
    },
    {
      name: "Dark Light Mode",
      tag: "Project 21",
      image: "./Day0_All_Project/images/Day_21.png",
      link_demo: "./Day21_Dark-Light_Mode/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day21_Dark-Light_Mode",
    },
    {
      name: "Filter Element",
      tag: "Project 22",
      image: "./Day0_All_Project/images/Day_22.png",
      link_demo: "./Day22_Filter-Elements/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day22_Filter-Elements",
    },
    {
      name: "Zoom Image",
      tag: "Project 23",
      image: "./Day0_All_Project/images/Day_23.png",
      link_demo: "./Day23_Zoom-Image/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day23_Zoom-Image",
    },
    {
      name: "Hover Board",
      tag: "Project 24",
      image: "./Day0_All_Project/images/Day_24.png",
      link_demo: "./Day24_Hover-Board/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day24_Hover-Board",
    },
    {
      name: "Video Player",
      tag: "Project 25",
      image: "./Day0_All_Project/images/Day_25.png",
      link_demo: "./Day25_Video-Player/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day25_Video-Player",
    },
    {
      name: "Validator Password",
      tag: "Project 26",
      image: "./Day0_All_Project/images/Day_26.png",
      link_demo: "./Day26_Validator-Password/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day26_Validator-Password",
    },
    {
      name: "Tooltip",
      tag: "Project 27",
      image: "./Day0_All_Project/images/Day_27.png",
      link_demo: "./Day27_Tooltip/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day27_Tooltip",
    },
    {
      name: "Skeleton Loading",
      tag: "Project 28",
      image: "./Day0_All_Project/images/Day_28.png",
      link_demo: "./Day28_Skeleton-Loading/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day28_Skeleton-Loading",
    },
    {
      name: "Play Piano",
      tag: "Project 29",
      image: "./Day0_All_Project/images/Day_29.png",
      link_demo: "./Day29_Play-Piano/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day29_Play-Piano",
    },
    {
      name: "Carousel",
      tag: "Project 30",
      image: "./Day0_All_Project/images/Day_30.png",
      link_demo: "./Day30_Carousel/index.html",
      link_code: "https://github.com/nguyenviet02/30_Days_Practice/tree/master/Day30_Carousel",
    },

  ],

  render() {
    let html = this.projects.map(project => {
      return `
        <div class="project">
      <div class="project-header">
        <div class="project-header-name">${project.name}</div>
        <div class="project-header-tag">${project.tag}</div>
      </div>
      <div class="project-image">
        <img src="${project.image}" alt="">
      </div>
      <div class="project-action hide">
        <a href="${project.link_demo}">
          <button class="live-demo">Live Demo</button>
        </a>
        <a href="${project.link_code}">
          <button class="view-code">View Code</button>
        </a>
      </div>
    </div>
      `
    }).join('');
    project_container.innerHTML = html;
  },


  handleEvent() {
    //* Variables
    const mouse = document.querySelector('.mouse');
    const cursor = document.querySelector('.cursor');
    const projects = document.querySelectorAll('.project');
    const live_demos = document.querySelectorAll('.live-demo');
    const view_codes = document.querySelectorAll('.view-code');

    //* Hiệu ứng khi hover vào project
    projects.forEach(project => {
      project.onmouseover = function () {
        project.querySelector(".project-action").classList.remove('hide');
        cursor.classList.add('active');
      };
      project.onmouseleave = function () {
        project.querySelector(".project-action").classList.add('hide');
        cursor.classList.remove('active');
      };
    })

    //* Hiệu ứng khi hover vào live-demo và view-code
    live_demos.forEach(live_demo => {
      live_demo.onmouseover = function () {
        mouse.classList.add('active');
      };
      live_demo.onmouseleave = function () {
        mouse.classList.remove('active');
      };
    });
    view_codes.forEach(view_code => {
      view_code.onmouseover = function () {
        mouse.classList.add('active');
      };
      view_code.onmouseleave = function () {
        mouse.classList.remove('active');
      };
    });

    //* Hiệu ứng con trỏ chuột
    document.onmousemove = function (e) {
      gsap.to(cursor, {
        x: e.pageX - cursor.offsetWidth / 2,
        y: e.pageY - cursor.offsetHeight / 2,
        duration: 0.2,
      })
      gsap.to(mouse, {
        x: e.pageX - mouse.offsetWidth / 2,
        y: e.pageY - mouse.offsetHeight / 2,
        duration: 0.3,
      })
    }
  },

  init() {
    this.render();
    this.handleEvent();
  }
}

app.init();


