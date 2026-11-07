/*
  CONTENT EDITING GUIDE
  Edit this list to add companies. Keep every URL sourced and up to date.
  roleFamilies drive the filtering chips: Development, QA & Testing, Cloud, Data & ERP.
  skills (optional) are extra search keywords only; they are not displayed.
  `part` is 1 (original directory) or 2 (new additions). Add `draft: true` to keep a record hidden.
  roleExamples are DISCOVERY AREAS, not currently confirmed openings.
  recruiterUrl is a LINKEDIN SEARCH, not the profile of a verified recruiter.
*/
window.DIRECTORY_COMPANIES = [
  {
    id: 'virtusa', part: 1, name: 'Virtusa', initials: 'V', accent: '#E8E7FF', ink: '#3E35A7',
    location: 'Navalur / Chennai', sector: 'Digital engineering & IT services',
    summary: 'Explore software engineering, digital assurance and cloud-related career paths at Virtusa.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud'],
    roleExamples: ['Java / Full Stack', 'QA & Automation', 'Cloud Engineering'],
    skills: ['Java', 'Full Stack', 'Selenium', 'Automation', 'AWS', 'Azure'],
    careerUrl: 'https://www.virtusa.com/careers/job-search/global/en',
    linkedinUrl: 'https://www.linkedin.com/company/virtusa/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Virtusa%20Chennai%20recruiter',
    careerLabel: 'Explore careers',
    note: 'Use the Chennai and experience filters on the official jobs portal.'
  },
  {
    id: 'ltm', part: 1, name: 'LTM', subname: 'Formerly LTIMindtree', initials: 'L', accent: '#FFEDEA', ink: '#B9473C',
    location: 'Chennai', sector: 'Technology consulting & services',
    summary: 'Previously known as LTIMindtree. The India portal has separate paths for students, early-career and experienced applicants.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Software Development', 'QA / Testing', 'Cloud & Data'],
    skills: ['Java', 'Python', 'Selenium', 'Automation', 'Cloud', 'Data', 'SAP'],
    careerUrl: 'https://careers.ltm.com/?locale=en_US',
    linkedinUrl: 'https://www.linkedin.com/company/ltimindtree/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=LTM%20LTIMindtree%20Chennai%20recruiter',
    careerLabel: 'Explore careers',
    note: 'The company introduced the LTM name in 2026; some older pages still say LTIMindtree.'
  },
  {
    id: 'mphasis', part: 1, name: 'Mphasis', initials: 'M', accent: '#F0EBFF', ink: '#6743AE',
    location: 'Manapakkam / Chennai', sector: 'IT services & application engineering',
    summary: 'A good company to research for application development, testing and infrastructure opportunities.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud'],
    roleExamples: ['Application Development', 'Testing', 'Infrastructure / Cloud'],
    skills: ['Java', 'Testing', 'Automation', 'Infrastructure', 'Cloud', 'DevOps'],
    careerUrl: 'https://careers.mphasis.com/home/hot-jobs/location-search/india.html',
    linkedinUrl: 'https://www.linkedin.com/company/mphasis/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Mphasis%20Chennai%20recruiter',
    careerLabel: 'Explore India roles',
    note: 'Its India careers area supports searches by skill and experience.'
  },
  {
    id: 'coforge', part: 1, name: 'Coforge', initials: 'C', accent: '#E5EFFF', ink: '#194E9A',
    location: 'Chennai', sector: 'AI engineering & IT services',
    summary: 'Explore engineering roles and dedicated fresher recruitment information through the company careers portal.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Java / Engineering', 'Testing', 'Cloud & Data'],
    skills: ['Java', 'Selenium', 'Automation', 'Cloud', 'Data', 'Fresher'],
    careerUrl: 'https://careers.coforge.com/coforge/',
    linkedinUrl: 'https://www.linkedin.com/company/coforge-tech/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Coforge%20Chennai%20recruiter',
    careerLabel: 'Explore IT roles',
    note: 'The official careers portal lets you filter by city and experience.'
  },
  {
    id: 'synechron', part: 1, name: 'Synechron', initials: 'S', accent: '#FFF4D8', ink: '#96651D',
    location: 'Taramani / Chennai', sector: 'Digital engineering & consulting',
    summary: 'Works across software engineering, financial technology, data and cloud transformation.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Java', 'QA Automation / SDET', 'Cloud & DevOps'],
    skills: ['Java', 'SDET', 'Selenium', 'Automation', 'DevOps', 'AWS', 'Data'],
    careerUrl: 'https://www.synechron.com/careers',
    linkedinUrl: 'https://www.linkedin.com/company/synechron/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Synechron%20Chennai%20recruiter',
    careerLabel: 'Explore Chennai roles',
    note: 'The careers page supports a Chennai / Taramani location filter.'
  },
  {
    id: 'adamsbridge', part: 1, name: 'adamsbridge', initials: 'a', accent: '#E9F1EC', ink: '#447A63',
    location: 'Velachery / Chennai', sector: 'Software-enabled managed services',
    summary: 'Works across technology-enabled operational services and automation. Check postings carefully for the exact role and eligibility.',
    roleFamilies: ['Development', 'QA & Testing', 'Data & ERP'],
    roleExamples: ['Software / Automation', 'Testing & QA', 'Operations Systems'],
    skills: ['Automation', 'Testing', 'QA', 'Software', 'Operations'],
    careerUrl: 'https://jobs.gusto.com/boards/adamsbridge-global-inc-08bbecbe-f51b-4785-85a9-2cff882913fe',
    linkedinUrl: 'https://www.linkedin.com/company/adams-bridge-global/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=adamsbridge%20Chennai%20recruiter',
    careerLabel: 'Public job board',
    note: 'Public board showed no open positions when last checked. This is not a confirmed hiring announcement.',
    caution: true
  },
  {
    id: 'ford', part: 2, name: 'Ford Motor Company', subname: 'Ford Business Solutions – India', initials: 'F', accent: '#EAF4FF', ink: '#0A66C2',
    location: 'Sholinganallur, Chennai', sector: 'Automotive technology & software engineering',
    summary: 'Explore software development, cloud engineering, AI, data engineering and enterprise technology careers at Ford.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Software Engineer', 'QA / Testing', 'Cloud Engineer', 'Data Engineer', 'AI / ML Engineer'],
    skills: ['Software', 'Testing', 'Cloud', 'Data', 'AI', 'ML', 'Automotive', 'GCP'],
    careerUrl: 'https://www.careers.ford.com/en/location/chennai-jobs/48560/1269750-1255053-1264527/4',
    linkedinUrl: 'https://www.linkedin.com/company/ford-motor-company/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Ford%20Chennai%20recruiter',
    careerLabel: 'Explore careers',
    note: 'The official Ford careers page is pre-filtered to Chennai. Check each posting for experience level and eligibility.'
  },
  {
    id: 'bny', part: 2, name: 'BNY', subname: 'Formerly BNY Mellon', initials: 'B', accent: '#EAF4FF', ink: '#0A66C2',
    location: 'Chennai', sector: 'Financial technology & global financial services',
    summary: 'Explore software engineering, application development, cloud, data and enterprise financial technology opportunities at BNY.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Software Engineer', 'Full-Stack Developer', 'QA / Testing', 'Cloud Engineer', 'Business Analyst'],
    skills: ['Java', 'Full Stack', 'Testing', 'Cloud', 'Business Analyst', 'BNY Mellon', 'Fintech'],
    careerUrl: 'https://eofe.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/BNY-Careers/jobs',
    linkedinUrl: 'https://www.linkedin.com/company/bnyglobal/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=BNY%20Chennai%20recruiter',
    careerLabel: 'Explore careers',
    note: 'Use the location filter on the BNY careers portal to narrow results to Chennai.'
  },
  {
    id: 'verizon', part: 2, name: 'Verizon', initials: 'V', accent: '#EAF4FF', ink: '#0A66C2',
    location: 'Chennai', sector: 'Telecommunications & technology engineering',
    summary: 'Explore software development, AI, cybersecurity, data science, network technology and cloud engineering opportunities.',
    roleFamilies: ['Development', 'Cloud', 'Data & ERP'],
    roleExamples: ['Software Engineer', 'Cloud Engineer', 'Cybersecurity Engineer', 'Data Scientist', 'Network Engineer'],
    skills: ['Software', 'Cloud', 'Cybersecurity', 'Security', 'Data Science', 'Network', 'AI', 'Telecom'],
    careerUrl: 'https://mycareer.verizon.com/jobs/?location=Chennai&page=1&pagesize=20&search=',
    linkedinUrl: 'https://www.linkedin.com/company/verizon/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Verizon%20Chennai%20recruiter',
    careerLabel: 'Explore careers',
    note: 'The official search link is set to Chennai. Add a keyword for your skill area.'
  },
  {
    id: 'citi', part: 2, name: 'Citi', initials: 'C', accent: '#EAF4FF', ink: '#0A66C2',
    location: 'Chennai', sector: 'Banking technology & financial services',
    summary: 'Explore software development, QA, cloud, data engineering and financial technology opportunities at Citi.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Java Developer', 'Full-Stack Developer', 'QA / Testing', 'Data Engineer', 'DevOps Engineer'],
    skills: ['Java', 'Full Stack', 'Testing', 'QA', 'Data', 'DevOps', 'Cloud', 'Banking', 'Fintech'],
    careerUrl: 'https://jobs.citi.com/location/chennai-tamil-nadu-india-jobs/287/1269750-1255053-7646145-1264527/4',
    linkedinUrl: 'https://www.linkedin.com/company/citi/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Citi%20Chennai%20recruiter',
    careerLabel: 'Explore Chennai careers',
    note: 'The official Citi page lists Chennai locations. Confirm experience level and eligibility on each posting.'
  },
  {
    id: 'comcast', part: 2, name: 'Comcast', subname: 'Comcast India Engineering Center', initials: 'C', accent: '#EAF4FF', ink: '#0A66C2',
    location: 'Thoraipakkam, Chennai', sector: 'Media technology & software product engineering',
    summary: 'Explore software engineering, cloud, AI, cybersecurity and product development opportunities at Comcast.',
    roleFamilies: ['Development', 'QA & Testing', 'Cloud', 'Data & ERP'],
    roleExamples: ['Software Engineer', 'QA Engineer', 'Cloud Engineer', 'Data Engineer', 'Cybersecurity Engineer'],
    skills: ['Software', 'QA', 'Testing', 'Cloud', 'Data', 'Cybersecurity', 'Security', 'AI', 'Media'],
    careerUrl: 'https://jobs.comcast.com/location/chennai-jobs/45483/1269750-1255053-1264527/4',
    linkedinUrl: 'https://www.linkedin.com/company/comcast/',
    recruiterUrl: 'https://www.linkedin.com/search/results/people/?keywords=Comcast%20Chennai%20recruiter',
    careerLabel: 'Explore Chennai careers',
    note: 'The official Comcast page is filtered to Chennai. Check each posting for experience level and eligibility.'
  }
];
