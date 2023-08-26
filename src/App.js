import RichText from "./RichText/RichText";

function App() {
  const content = `<div class="display-flex flex-column flex-grow-1 mr2">
            <a class="nt-card__headline nt-card__text--word-wrap t-black t-normal text-body-small" href="/feed/update/urn%3Ali%3Aactivity%3A7101248037284425728?origin=SHARED_BY_YOUR_NETWORK" tabindex="0">
              <span class="nt-card__text--3-line">
                <strong>JOB POST</strong><span class="white-space-pre"> </span>posted: HIRING ALERT!! International Leads Generator and Sales Executive:(2 position) We are looking for a dynamic and energetic "International Sales Executive" with previous experience in International Sales to join our client's team! Responsibilities: ● Excellent Verbal, Written, and Interpersonal communication skills. ● Experience with handling international clients related to Website Development and Digital Marketing. ● Organic social lead generation experience especially on LinkedIn ● Freelance Portals (Upwork, Bark, Fiverr, Freelancer) sales experience is a plus point. ● Commission structure on top of salary Qualifications: ● At least 2 years of experience in International Sales. ● Proven record of doing sales for Web development or Digital Marketing ● Must be proficient in verbal and written English. ● Sound knowledge of IT terminologies. Job Type: Hybrid Timings: 9 PM–5 AM PST (Mon–Sat) Salary Package: PKR 50/80K (including 35% travel allowance) Interested candidates may DM me their resume or send me via email placementsolutionswork@gmail.com #salescareers #internationalsales #businessdevelopmentexecutive #upwork #fiverr #freelance #leadgenerator<!---->
              </span>
         </a>
  </div>`;
  
  return (
    <div className="App">
      <RichText content={content} />
    </div>
  );
}

export default App;
