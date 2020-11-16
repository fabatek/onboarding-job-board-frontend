import { render, waitFor } from "@testing-library/react";
import App from "../../containers/App/App";
import React from "react";
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('https://remotive.io/api/remote-jobs', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        "job-count": '3',
        "jobs": [
          {
              "id": 296407,
              "url": "https://remotive.io/remote-jobs/writing/editor-mastermind-296407",
              "title": "Editor & Mastermind",
              "company_name": "Above Flights",
              "category": "Writing",
              "tags": [],
              "job_type": "part_time",
              "publication_date": "2020-11-15T21:40:21",
              "candidate_required_location": "Canada Only",
              "salary": "",
              "description": "<p><span class=\"s1\">Above Flights is a new travel magazine &amp; search engine for budget-travellers.</span></p>\n<p><span class=\"s1\">We help our community discover destinations around the world and secure the best deals.<span class=\"Apple-converted-space\"> </span></span></p>\n<p><span class=\"s1\">We are travel nerds who built a solid tech foundation.<span class=\"Apple-converted-space\"> </span></span></p>\n<p><span class=\"s1\">We're looking for the perfect voice, a travel mastermind, a future CEO.</span></p>\n<p> </p>\n<p><span class=\"s1\"><strong>What you'll work on:</strong></span></p>\n<ul>\n<li><span class=\"s1\">Write fun copy about destinations</span></li>\n<li><span class=\"s1\">Refine the copy within the product</span></li>\n<li><span class=\"s1\">Promote deals on social media<span class=\"Apple-converted-space\"> </span></span></li>\n<li><span class=\"s1\">Source the best travel photos and videos</span></li>\n<li><span class=\"s1\">Animate our FB community<span class=\"Apple-converted-space\"> </span></span></li>\n</ul>\n<p> </p>\n<p><span class=\"s1\"><strong>And eventually (if there's a fit):<span class=\"Apple-converted-space\"> </span></strong></span></p>\n<ul>\n<li><span class=\"s1\">Supervise other writers/contributors</span></li>\n<li><span class=\"s1\">Manage our marketing budget</span></li>\n<li><span class=\"s1\">Establish deals with sponsors and partners</span></li>\n<li><span class=\"s1\">Define our strategy for IG and Youtube</span></li>\n<li><span class=\"s1\">Manage company communications</span></li>\n<li><span class=\"s1\">Write/edit travel guides<span class=\"Apple-converted-space\"> </span></span></li>\n<li><span class=\"s1\">Research and test ways to grow our audience</span></li>\n<li><span class=\"s1\">Represent the company in events and with medias.</span></li>\n<li><span class=\"s1\">Manage new features in the product.</span></li>\n</ul>\n<p> </p>\n<p><strong>Perks</strong>:</p>\n<ul>\n<li><span class=\"s1\">You can work from anywhere (we love travelling)</span></li>\n<li><span class=\"s1\">Generous equity / stock options offered </span></li>\n<li><span class=\"s1\">We're hungry, early stage, and have lots of room for growth</span></li>\n<li><span class=\"s1\">Possibility to join as co-founder if there is a good fit</span></li>\n<li><span class=\"s1\">We use the best tools.<span class=\"Apple-converted-space\"> </span></span></li>\n</ul>\n<p> </p>\n<p><span class=\"s1\"><strong>About you:</strong></span></p>\n<ul>\n<li><span class=\"s1\">You write perfect english and emoji</span></li>\n<li><span class=\"s1\">You are organized and can quickly learn new tools</span></li>\n<li><span class=\"s1\">Experienced with writing and social media marketing</span></li>\n<li><span class=\"s1\">You love clever and engaging copy</span></li>\n<li><span class=\"s1\">You are driven and passionate about flying/travelling</span></li>\n<li><span class=\"s1\">Entrepreneurial spirit and startup experience a plus</span></li>\n</ul>\n"
          },
          {
              "id": 297733,
              "url": "https://remotive.io/remote-jobs/teaching/english-teacher-297733",
              "title": "English Teacher",
              "company_name": "Qkids",
              "category": "Teaching",
              "tags": [],
              "job_type": "contract",
              "publication_date": "2020-11-15T21:40:19",
              "candidate_required_location": "North America Only",
              "salary": "",
              "description": "<p><strong>Position Details</strong><br>·Position title: [Remote] Part-time Online Tutor for Children<br>·Rate: $16-20 USD/hr (2 lessons)<br>·Location: Remote, online (U.S. and Canada)<br>·Start date: Immediately<br>·Contract type: Independent Contractor<br>·Contract term: 6 months<br>-<br><strong>Why Teach with Qkids?</strong><br>·Work your own schedule - you can work part-time<br>·Classes booked for you - no self-marketing<br>·Lessons fully designed and gamified - no lesson planning<br>·Earn up to $20/hour working from home<br>·Teaching classrooms with up to 4 students<br>·Training and support provided to improve your English teaching<br>-<br><strong>Requirements</strong><br>·Eligible to legally work in the U.S. or Canada<br>·Bachelor's degree required<br>·Teaching license or English teaching certificates (TESOL, TEFL, CELTA, ESL) required before lessons assigned<br>·Prior teaching experience or equivalent in education, tutoring, mentoring, homeschooling preferred<br>·At least 6 hours available weekly<br>-<br><strong>Regular class time slots: 19 hrs</strong><br>7 days a week (AM - EST):<br>5:30-6:00, 6:10-6:40, 6:50-7:20, 7:30-8:00<br><br>Plus Friday and Saturday (PM - EST):<br>7:30-8:00, 8:10-8:40, 8:50-9:20, 9:30-10:00, 10:10-10:40<br>-<br><strong>About Qkids</strong><br>Qkids is a leading online education platform that connects North American English teachers with over 600,000 Chinese students from ages 4 to 12 years old. Using a narrative game-based curriculum, teachers guide students through fun and dynamic learning experiences while in the comfort of their own homes. Qkids' unique patented platform is user-friendly and engaging for teachers and students alike. Founded in 2015, Qkids has become a national leader in cross-cultural online learning and established offices in Shenzhen, Xiamen, Guangzhou, and Beijing. The company has completed its Series B financing round led by IDG Capital and is poised to build lasting growth across the world. <br><br>Facebook: <a href=\"https://www.facebook.com/JoinQkids/\" rel=\"nofollow\">https://www.facebook.com/JoinQkids/</a><br>Teacher Video: <a href=\"https://www.youtube.com/channel/UCTxWgJC1TZ2M3U7KU-avBUA?sub_confirmation=1\" rel=\"nofollow\">https://www.youtube.com/channel/UCTxWgJC1TZ2M3U7KU-avBUA?sub_confirmation=1</a></p>\n"
          },
          {
              "id": 291373,
              "url": "https://remotive.io/remote-jobs/qa/qa-manual-291373",
              "title": "QA - Manual",
              "company_name": "srijan",
              "category": "QA",
              "tags": [],
              "job_type": "full_time",
              "publication_date": "2020-11-15T21:40:17",
              "candidate_required_location": "Multiple locations ",
              "salary": "",
              "description": "<div> </div>\n<div><strong>Roles &amp; Responsibilities:</strong></div>\n<div>\n<ul>\n<li>Analyze product requirements to define acceptance criteria</li>\n<li>Design, create and maintain reusable test scripts</li>\n<li>Execute manual and automated testing</li>\n<li>Strong API Testing experience in Postman</li>\n<li>Review Test Plans with Product Management and Development teams</li>\n<li>Provide estimates on Test resources and effort to support prioritization and planning</li>\n<li>Work closely with engineers to ensure timely resolution of issues</li>\n<li>Participate as a testing resource when required and be an integral part of all releases</li>\n<li>Show flexibility and understanding to occasionally work within tight deadlines</li>\n<li>Assist with constantly reviewing and evolving processes</li>\n<li>The ideal candidate should have a desire to gain experience testing. </li>\n<li>The individual will need practical knowledge and experience with both AGILE and Waterfall development methodologies and will be used to a fast paced development driven environment.</li>\n<li>Understanding the feature to test</li>\n<li>Writing/Updating test cases</li>\n<li>Design, develop and execute manual scripts</li>\n<li>Knowledge of software QA methodologies</li>\n<li>Perform thorough regression testing when bugs are resolved</li>\n</ul>\n</div>\n<div>\n<div> </div>\n<div><strong>Qualification:-</strong></div>\n<div>Must be a B.Tech/B.E/M.Tech/M.E/MCA/M.Sc CS</div>\n</div>\n"
          }]
      }),
    )
  }),
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test("renders number of jobs", async () => {
  const { getByTestId } = render(<App />);
  const jobElement = getByTestId("job-number");
  await waitFor(()=>
    expect(Number(jobElement.textContent)).toBeGreaterThan(0),{timeout:10000})   

});
