import Experience from './Pages/Experience';
import Introduction from './Pages/Introduction';
import Resume from './Pages/Resume';
import InterviewTips from './Pages/InterviewTips';
import Preparation from './Pages/Preparation';

export const metadata = {
  introduction: {
    title: 'Introduction',
    // path: '/internships/introduction',
    image:
      'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/c92163f6/src/Assets/Internships/introduction.svg',
    component: Introduction,
  },
  resume: {
    title: 'Build Your Resume',
    // path: '/internships/resume',
    image:
      'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/c92163f6/src/Assets/Internships/resume.svg',
    component: Resume,
  },
  preparation: {
    title: 'Preparation Guide',
    // path: '/internships/hall-of-fame',
    image:
      'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/c92163f6/src/Assets/Internships/preparation.svg',
    component: Preparation,
  },
  interviewTips: {
    title: 'Interview Tips',
    // path: '/internships/interview-tips',
    image:
      'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/c92163f6/src/Assets/Internships/interview_tips.svg',
    component: InterviewTips,
  },
  experience: {
    title: 'Internship Experience',
    // path: '/internships/experience',
    image:
      'https://cdn.statically.io/gh/ananyalohani/iiitdplaybook/c92163f6/src/Assets/Internships/experience.svg',
    component: Experience,
  },
};
