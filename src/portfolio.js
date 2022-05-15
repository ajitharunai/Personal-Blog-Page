/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aji Creations ",
  title: "Hi all, I'm Ajith Kumar Murugan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Wj7YHlysTP9gSxt9NziBrXAQLaDJN7xT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ajitharunai",
  linkedin: "https://www.linkedin.com/in/ajith-kumar-m-7897541b4/",
  gmail: "ajithkumaraec10@gmail.com",
  gitlab: "https://gitlab.com/ajitharunai",
  facebook: "https://www.facebook.com/ajithkumar.m.9216778",
  medium: "https://medium.com/@ajithkumaraec10",
  stackoverflow: "https://stackoverflow.com/users/19111122/ajith-kumar-m",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ARUNAI ENGINEERING COLLEGE",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bacheloar of Computer Science and Engineering",
      duration: "September 2018 - April 2022",
      desc: "Data Scientist Intern & Research Engineer in Buddi AI",
      descBullets: [
        "Learning Lot of things",
        "A positive mindset brings positive things"
      ]
    },
    {
      schoolName: "Govt.Her.Sec.School-Elangunni",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Biology Mathamatics",
      duration: "September 2016 - April 2017",
      desc: "Average Student",
      descBullets: ["You miss 100% of the shots you don't take."]
    },
    {
      schoolName: "Govt.High.School-Puliyampatti",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "SSLC",
      duration: "September 2011 - April 2015",
      desc: "Average Student",
      descBullets: ["Be confident in yourself. Nobody can make you feel inferior without your permission."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist Intern & Research Engineer",
      company: "Buddi AI",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2022 – Present",
      desc: "No matter how much experience you have, how many degrees you have, or how well known you have become — there is always something new to learn. Don’t rest on your past experiences. If you do nothing to improve your skills, you won’t stay where you are.",
      descBullets: [
        "Change is the end result of all true learning.",
        "Learning never exhausts the mind."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Freelancer",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2019 – May 2021",
      desc: "Don’t get distracted. Never tell yourself that you need to be the biggest brand in the whole world. Start by working on what you need at the present moment and then what you need to do tomorrow. So, set yourself manageable targets."
    },
    {
      role: "Web Developer",
      company: "Google Blogger",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2017 – Sep 2022",
      desc: "Don’t try to plan everything out to the very last detail. I’m a big believer in just getting it out there: create a minimal viable product or website, launch it, and get feedback. "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Best Projects",
  subtitle: "Expect the best, plan for the worst, and prepare to be surprised",
  projects: [
    {
      image: require("./assets/images/webpage.jpg"),
      projectName: "Web-design-in-Tamil-Learning-Web-page",
      projectDesc: "My best and wonderful project in the period of 2022",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ajitharunai.github.io/Web-design-in-Tamil-Learning-Web-page/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/music.png"),
      projectName: "Music-Player-Responsive-API",
      projectDesc: "As for the future, your task is not to foresee it, but to enable it.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://music-player-responsive-api-1a5si9fvc-ajitharunai.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best IoT Trainer Award",
      subtitle:
        "The Center of Industry based Internet of Things is the initiative taken by the Department of Computer Science & Engineering, Arunai Engineering College, since August 2019, to let the school children understand and learn the new technologies, and enlighten themselves.This Workshop is mainly based on the projects of IoT and MICROBIT. As per Anna University Curriculum doesn’t have IoT as a part, we used this opportunity to enlighten our students and school students as well.",
      image: require("./assets/images/codeInLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15hPNrRMZ9SKnf4R4Dty3Pc_iJYxAgJrn/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1POjKDonZbL7GB7n0ZcHfaV7jIMLSLKdX/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Best Student Award",
      subtitle:
        "I find that the harder I work, the more luck I seem to have.Teachers can open the door, but you must enter it yourself.The beautiful thing about learning is that no one can take it away from you.A person who never made a mistake never tried anything new.I think it’s possible to ordinary people to choose to be extraordinary.The future belongs to those who believe in the beauty of their dreams.Learn from yesterday. Live for today. Hope for tomorrow.The more that you read, the more things you will know, the more that you learn, the more places you’ll go.",
      image: require("./assets/images/award.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1POjKDonZbL7GB7n0ZcHfaV7jIMLSLKdX/view?usp=sharing"
        }
      ]
    },

    {
      title: "STEM Program Participation Certification",
      subtitle: "Arunai STEM is the event initiated during this COVID-19 pandemic in the Arunai Engineering College, October 2020.It is fabricated to bestow the poise platform for the young talents and emerging prowesses, to showcase and evolve themselves.In this program, all the students of Arunai Engineering College can participate and share their knowledge among other students.",
      image: require("./assets/images/logo.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1c2npTI_vAqWrOBcyLU-voBZzpzj5EM98/view?usp=sharing"},
        {
          name: "Presentation Video",
          url: "https://arunai.org/stem/"
        }
      ]
    },
    {
      title: "Tamil Nadu Police Apreciation Certification",
      subtitle: "Issued by Mr.Pavan Kumar Reddy.,IPS (Superintendent of police) - Tiruvannamalai · Feb 2022.We got a great oppurtunity to collaboratively work with Tiruvannamalai District Police for providing technical support during the festivel event.I am happy to share that today (15-02-2022) i recieved appreciation Certification from Thiru.Pavan Kumar Reddy,IPS., Tiruvannamalai District.Especially I like to thank Dr.Jothish Kumar Mohanavel for providing me a great platform to explore my knowledge in the area of software development and many other Technical Platforms.Heartfelt thanks to my teacher for discovering and encouraging the talent I have at the right time and taking me on the right path to achieve the goals.",
      image: require("./assets/images/police.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1uFvz-5GIiIYj_Xy31P78nCUMXsrbwAA7/view?usp=sharing"},
        {
          name: "View",
          url: "https://arunai.org/social-connectivity/"
        }
      ]
    },
    {
      title: "Satish Dhawan Space Centre Appreciation Certification",
      subtitle: "Best moment for my life to learning Lot of things related on space and Rocket & satelite.",
      image: require("./assets/images/isro_logo.jpg"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1veBMGfPytJO086W6vAHBomvrFTgLtW0m/view?usp=sharing"},
        {
          name: "View",
          url: "https://drive.google.com/file/d/1veBMGfPytJO086W6vAHBomvrFTgLtW0m/view?usp=sharing"
        }
      ]
    },
    {
      title: "Ideathon Participation Certification",
      subtitle: "AEC brings to you an ARUNAI IDEATHON 2022 in association with Institution's Innovation Council (IIC) & Computer Society of India (CSI) to discover real brand solutions by hiring as well as meeting the best & the youngest minds",
      image: require("./assets/images/ideathon_logo.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1pSutnWc_eYOpV_CxBYfDzSi_M-2MeLtq/view?usp=sharing"},
        {
          name: "View",
          url: "https://arunai.org/ideathon/"
        }
      ]
    },
    {
      title: "MIT Square Campus Ambaseddor",
      subtitle: "The people that are feeding you the information on things that I like - love life, believe in yourself, be motivational, give your time to things and meditate - they're all older people who are well into their 50s and have had careers, and for me, at this point, I'm the young ambassador for this whole lifestyle of making your mentality a reality.",
      image: require("./assets/images/EmbeddedImage.png"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1mAGGa7JDslMnHzlo75ipcJnlBRuf1nWX/view?usp=sharing"},
        {
          name: "View",
          url: "https://www.mitsquare.com/"
        }
      ]
    },
    {
      title: "ISRO Oneday Workshop Participation Certificate",
      subtitle: "I believe in innovation and that the way you get innovation is you fund research and you learn the basic facts.",
      image: require("./assets/images/indian.jpg"),
      footerLink: [
        {name: "Certification", 
        url: "https://drive.google.com/file/d/1PCaPb-Qvsk_HAZThL1KjdBRc_YR94moI/view?usp=sharing"},
        {
          name: "View",
          url: "https://www.isro.gov.in/about-isro/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://ajicreations.blogspot.com/2022/01/message-encryption-and-decryption-tool.html",
      title: "Message-Encryption-and-Decryption-tool-using-Python-Gui-Tkinter-project",
      description:"Python offers multiple options for developing GUI (Graphical User Interface). Out of all the GUI methods, tkinter is most commonly used method. It is a standard Python interface to the Tk GUI toolkit shipped with Python. Python with tkinter outputs the fastest and easiest way to create the GUI applications."
    },
    {
      url: "https://ajicreations.blogspot.com/2022/01/car-game-using-js.html",
      title: "Car-Game-using-js",
      description:
        "I alone cannot change the world, but I can cast a stone across the water to create many ripples."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Banglore 2019",
      slides_url: "https://docs.google.com/presentation/d/1JlW-gBHBJAw4Z8oR535d7jzSb2T0NVmy/edit#slide=id.p1",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/ajith-kumar-murugan5/embed/episodes/How-to-improve-positive-things-e1ii0ph/a-a7u8o2v"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9080468220",
  email_address: "ajithkumaraec10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ajitharunai", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
