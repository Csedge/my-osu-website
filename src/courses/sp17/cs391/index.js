import { generateSitePath } from '../../../lib/SitePath';

var courseDetails = {
  number: 'CS 391',
  title: 'Social & Ethical Issues in CS',
  term: 'Spring 2017',

  essentials: [
    {
      title: 'Instructor',
      infoHTML: 'Rob Hess (<a href="mailto:hessro@oregonstate.edu">hessro@oregonstate.edu</a>)'
    },
    {
      title: 'TAs',
      infoHTML: 'Souti Chattopadhyay (<a href="mailto:chattops@oregonstate.edu">chattops@oregonstate.edu</a>)<br>Anusha Dasari (<a href="mailto:dasaria@oregonstate.edu">dasaria@oregonstate.edu</a>)'
    },
    {
      title: 'Lectures',
      infoHTML: 'MWF 1:00&ndash;1:50pm, KEC 1003'
    },
    {
      title: 'Office Hours',
      infoHTML: 'Rob: Tu 1:00&ndash;2:00pm (KEC 1109)'
    },
    {
      title: 'Syllabus',
      infoHTML: '<a href="https://docs.google.com/document/d/1wRJzcmsf9DU9E3ostg6NQItTefZ_XVwSjS1FFGDSB7Q/edit?usp=sharing">CS 391 Syllabus</a>'
    },
    {
      title: 'Piazza',
      infoHTML: '<a href="https://piazza.com/oregonstate/spring2017/cs391">CS 391 on Piazza</a>'
    },

    {
      title: 'Community',
      infoHTML: 'Please read <a href="' + generateSitePath("/teaching/community") + '">this page about establishing a positive classroom community</a>'
    }
  ],

  calendar: [
    {
      week: 1,
      sections: [
        {
          heading: 'Topics',
          entriesHTML: [
            'Course Intro'
          ]
        },
        {
          heading: 'Readings',
          entriesHTML: []
        }
      ]
    }
  ],

  assignments: {
    preamble: "<p></p>",
    assignments: [

    ]
  }
};

export default courseDetails;
