import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Matt G. Wagner - Software Architect, Leadership Coach, and U.S. Army Officer.",
};

export default function CV() {
  return (
    <>
      <h1>Matt G. Wagner - Resume</h1>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:Resume@MattGWagner.com">Resume@MattGWagner.com</a>
        <br />
        <strong>Connect:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/mattgwagner"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <strong>Code:</strong>{" "}
        <a
          href="https://github.com/mattgwagner"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        <strong>Web:</strong>{" "}
        <a href="https://mattgwagner.com">MattGWagner.com</a>
      </p>

      <a
        href="https://stackoverflow.com/cv/mattgwagner"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://stackoverflow.com/users/flair/51270.png"
          width="208"
          height="58"
          alt="profile for MattGWagner at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          title="profile for MattGWagner at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
        />
      </a>

      <h2>Summary</h2>

      <p>
        <strong>
          I am an experienced and enthusiastic technical leader, serving as
          architect and mentor on distributed engineering teams for over ten
          years. I have experience in companies ranging from the Fortune 50 to
          start-ups, coupled with almost ten years of service as an Officer in
          the U.S. Army and Florida National Guard. I have experience as an
          on-the-ground commander and coordinator of National Guard Soldiers
          serving in emergency response situations. I am passionate about my
          profession, endeavoring to produce outstanding results in whatever
          I&apos;m tasked to do.
        </strong>
      </p>

      <hr />

      <h2>Technical Skills</h2>

      <ul>
        <li>Primary Language / Ecosystem: C# / .NET, Microsoft Azure</li>
        <li>Active U.S Government Security Clearance</li>
        <li>Professional Coaching, Organizational Leadership.</li>
        <li>
          Agile Project Management (Traditional Scrum &amp; Kanban) via Azure
          DevOps, JIRA, Trello
        </li>
        <li>Databases: SQL Server, SQLite, PostgreSQL, Cosmos DB</li>
        <li>Front-end Frameworks such as Blazor, ReactJS and Knockout.js</li>
        <li>
          API Design and Documentation: REST, Swagger/OpenAPI specifications
        </li>
        <li>Low-Code/No-Code Solutions: AirTable, Knack, Bubble.io</li>
        <li>
          Build &amp; Deployment Systems: Azure DevOps, AppVeyor, TeamCity,
          Jenkins, Docker
        </li>
        <li>Distributed Caching and Messaging via Redis</li>
        <li>
          Systems Administration: Microsoft Windows Server 2003-2019+, Ubuntu,
          Mac OS
        </li>
        <li>
          Utilized Packer and Vagrant for reproducible Developer Environments
        </li>
      </ul>

      <h2>Professional Experience</h2>

      <h3>
        <a
          href="https://redleg.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Red Leg Dev, LLC
        </a>
      </h3>
      <p>
        <strong>Owner, Director of Engineering</strong> - June, 2018 - Present
      </p>

      <ul>
        <li>
          Designed and facilitated tailored technical leadership development
          programs to clients including direct coaching of their leadership teams
        </li>
        <li>
          Provided custom software engineering and consulting services to small
          and medium sized business clients
        </li>
        <li>
          Self-driven work, drove User Stories and feature requests to completion
          utilizing a variety of technical skills, ranging from business-driven
          PDF form generation to Azure AD and OpenID Connect SSO implementations
        </li>
        <li>
          Experience with time-tracking and reporting, producing client invoices
          and handling bookkeeping
        </li>
        <li>
          Built highly-interactive and responsive user interfaces using Blazor
          Web Assembly and OpenAPI-defined Dotnet backends
        </li>
        <li>
          Building custom integrations and financial analysis tools with Procore
          construction management APIs with OAuth
        </li>
      </ul>

      <h3>
        <a
          href="https://www.goarmy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          U.S. Army
        </a>
        ,{" "}
        <a
          href="https://state.nationalguard.com/florida"
          target="_blank"
          rel="noopener noreferrer"
        >
          Florida Army National Guard
        </a>
      </h3>
      <p>
        <strong>MOS 13A, Field Artillery Officer</strong> - September, 2011 -
        Present
      </p>

      <ul>
        <li>
          Currently serving as Commander for M777A2 artillery battery, responsible
          for leading 85+ Soldiers and $10mm+ of equipment
        </li>
        <li>
          Experience in operational planning, organizational leadership,
          logistical support, mentoring, and personnel development
        </li>
        <li>
          Performed on-the-ground tactical leadership of a Field Artillery firing
          battery during numerous live fire operations
        </li>
        <li>
          Commanded and coordinated 80+ Soldiers during training and state
          emergency response operations, including five major catastrophic
          hurricanes and two presidential inaugurations
        </li>
        <li>U.S. Government Security Clearance</li>
        <li>
          Served as a Commander, Executive Officer, Platoon Leader, and Fire
          Direction Officer with collateral duties as the Knowledge Management
          Officer and Safety Officer
        </li>
        <li>
          NATO Allied Rapid Response Cell exercise experience including
          coordination and training via Operation Dynamic Front 18 in Germany
        </li>
      </ul>

      <h4>Training &amp; Schools</h4>

      <ul>
        <li>IS-00230.d: Fundementals of Emergency Management (FEMA)</li>
        <li>IS-240.B: Leadership and Influence (FEMA)</li>
        <li>
          Field Artillery Captain&apos;s Career Course, Fort Sill, OK (2017-2019)
        </li>
        <li>
          Field Artillery Basic Officer Leadership Course, Fort Sill, OK (2014)
        </li>
        <li>
          Officer Candidate School, Florida Regional Training Institute, Camp
          Blanding Joint Training Center (2012, 2013)
        </li>
        <li>Basic Combat Training, Fort Sill, OK (2011)</li>
      </ul>

      <h3>
        <a
          href="http://www.mercuryworks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MercuryWorks
        </a>{" "}
        - Tampa, FL
      </h3>
      <p>
        <strong>Principal Software Engineer</strong> - August 2017 - April 2020
      </p>

      <ul>
        <li>
          Solution Architect and Technical Lead for team of 5+ cross-disciplinary
          engineers and product owner
        </li>
        <li>
          Served in Engineering Manager role, mentor for junior and senior
          application developers, responsible for training and career development
        </li>
        <li>
          Tech Lead for Backend Developers Guild, facilitating lunch-and-learn
          sessions and cross-functional knowledge sharing
        </li>
        <li>
          Responsible for Screening, Interviewing, and Onboarding New Engineers,
          utilizing Jazz HR
        </li>
        <li>
          Partnered with Product Owners to groom, plan, and manage team workflow
          via Azure DevOps
        </li>
        <li>
          Designed Applicant Code Screen to improve Signal-to-Noise ratio for New
          Candidates through our hiring pipeline
        </li>
        <li>
          Balanced development efforts across multiple concurrent projects and
          clients while maintaining focus on quality outputs
        </li>
        <li>
          Utilized ReactJS with Aspnet WebAPI and Serverless/Azure Functions
          backends to wire up rich client experiences
        </li>
      </ul>

      <h3>
        <a
          href="https://certipay.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CertiPay
        </a>{" "}
        - Winter Haven, FL (Remote Worker)
      </h3>
      <p>
        <strong>Principal Software Engineer</strong> -- October 2014 - August
        2017
      </p>

      <h4>Technologies</h4>

      <ul>
        <li>ASP.NET, MVC, C#, PowerShell</li>
        <li>Service Oriented Architecture/Microservices via Nancy</li>
        <li>Continuous Integration via TeamCity, Octopus Deploy</li>
        <li>Entity Framework (Code First)</li>
        <li>Microsoft SQL Server 2012, 2016</li>
        <li>GitHub/BitBucket</li>
        <li>Automated testing via XUnit/NUnit, Moq, ApprovalTests.net</li>
        <li>Redis for Caching, Background Job Processing, Pub/Sub</li>
      </ul>

      <h4>Roles &amp; Responsibilities</h4>

      <ul>
        <li>
          Recruited, interviewed, onboarded, and mentored team of developers and
          business analysts
        </li>
        <li>
          Lead the greenfield implementation of the next-generation payroll and HR
          back-office application, balancing technology decisions with regards to
          risk/reward and stability
        </li>
        <li>Groomed and triaged agile product roadmap and backlog</li>
        <li>Responsible for design and code reviews for team</li>
        <li>
          Designed and implemented our automated build, test, and deployment
          system to increase development velocity across the organization
        </li>
        <li>
          Designed support frameworks to provide consolidated logging and
          debugging for our distributed systems
        </li>
        <li>
          Organized and lead internal tech talks on topics such as proper
          exception handling, automated deployments, microservice-based
          architectures, and build pipelines
        </li>
      </ul>

      <h3>DealerTrack Technologies, Inc (Remote Worker)</h3>
      <p>
        <strong>Lead Software Engineer</strong> -- July 2014 - October 2014
      </p>

      <h3>ASR Pro, LLC (Acquired by DealerTrack in July 2014)</h3>
      <p>
        <strong>Senior Software Engineer</strong> - July 2012 - July 2014
      </p>

      <h4>Technologies</h4>

      <ul>
        <li>ASP.NET, MVC, C#, Windows Services</li>
        <li>Entity Framework, Stored Procedures / T-SQL</li>
        <li>Microsoft SQL Server</li>
        <li>MSBuild, PowerShell, TeamCity</li>
        <li>Source Control via Git/GitHub</li>
        <li>Redis for distributed caching, message queue</li>
        <li>Unit Testing via XUnit.net/NUnit</li>
      </ul>

      <h4>Roles &amp; Responsibilities</h4>

      <ul>
        <li>
          Lead development reviews and architecture planning for future scaling
        </li>
        <li>
          Restructured data access layer library and implemented distributed
          caching using Redis to improve performance
        </li>
        <li>
          Analyzed metrics and profiler output to optimize code paths and improve
          response times 25% over 20+ million requests per week
        </li>
        <li>
          Built automated build and deployment system that resulted in a 10x
          increase in developer productivity and mean time to production
        </li>
        <li>
          Developed interview questions in order to screen engineering applicants
        </li>
        <li>
          Implemented distributed error logging mechanism to aid production
          debugging
        </li>
        <li>
          Developed job queue and scheduled jobs to manage integration processing
          service in primary data integration system
        </li>
        <li>
          Produced OpenTrack.net, open source library available on GitHub and
          NuGet for interacting with third-party STAR-based web service
        </li>
      </ul>

      <h3>
        <a
          href="https://midflorida.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIDFLORIDA Credit Union
        </a>{" "}
        - Lakeland, FL
      </h3>
      <p>
        <strong>Developer II</strong> - December, 2011 - July, 2012
      </p>

      <h4>Roles &amp; Responsibilities</h4>

      <ul>
        <li>
          Implemented development tool-chain to include coordination between
          Redmine issue tracker, SVN source control, and TeamCity automated
          builds
        </li>
        <li>
          Maintained and improved online banking suite of customer-facing
          applications
        </li>
        <li>
          Localized mobile banking application to aid Spanish speaking users
        </li>
        <li>
          Configured and used RSA&apos;s Adaptive Authentication product for
          analyzing fraud patterns in online banking
        </li>
      </ul>

      <h3>
        <a
          href="https://autoloop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AutoLoop
        </a>{" "}
        - Clearwater, FL (Remote Worker)
      </h3>
      <p>
        <strong>Software Engineer</strong> - August 2010 - September 2011
      </p>

      <h4>Roles &amp; Responsibilities</h4>

      <ul>
        <li>
          Maintained and expanded a multi-tiered .NET application suite including
          ASP.NET front-ends and C# Web and Windows Services
        </li>
        <li>
          Optimize processes across multiple database shards in a data-driven
          environment
        </li>
        <li>
          Developed logging and error handling platform with web-accessible
          interface
        </li>
        <li>
          Worked with QA and Support personnel to develop administrative
          interfaces and dashboards
        </li>
        <li>
          Assisted in development of core data integration platform, allowing
          multi-threaded access to expedite data processing
        </li>
      </ul>

      <h3>
        <a
          href="https://www.jpmorganchase.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JPMorganChase
        </a>{" "}
        - Tampa, FL
      </h3>
      <p>
        <strong>Web Applications Developer</strong> - June 2008 - August 2010
      </p>

      <h4>Roles &amp; Responsibilities</h4>

      <ul>
        <li>
          Attended JPMorganChase Corporate Development Program (CDP) Core
          Training in New York City on fundamentals of project management,
          finance, and team leadership
        </li>
        <li>
          Lead team workshops on J2EE best-practices on topics such as source
          control, bug tracking, exception handling, and event logging
        </li>
        <li>
          Lead Developer on several long-term projects involving teams on-site
          and overseas in Mumbai, India
        </li>
      </ul>

      <h3>University of South Florida Controller&apos;s Office - Tampa, FL</h3>
      <p>
        <strong>IT Systems Support</strong> - May 2007 - May 2008
      </p>

      <h3>
        University of South Florida Academic Computing Help Desk - Tampa, FL
      </h3>
      <p>
        <strong>Student Technology Consultant</strong> - January 2006 - December
        2006
      </p>

      <h2>Conferences/Volunteering</h2>

      <h3>
        Avengercon V - &quot;Rapid Application Development for Emergency
        Response Scenarios&quot; - December 2020
      </h3>

      <p>
        Rapid application development tools, sometimes referred to as &quot;low
        code&quot; or &quot;no-code&quot; in common buzzword, provide a clear
        boost when you need to quickly adapt to a changing situation on the
        ground during an emergency response situation. Higher headquarters
        information gathering requirements change, reporting formats proliferate,
        and oftentimes the Tactical Operations Center is left massaging data from
        emails, texts, and attached spreadsheets into the format of the day.
      </p>

      <p>
        In this talk, I will provide an introduction to some tools which
        I&apos;ve found useful on the marketplace that you can use to help
        consolidate and assist in &quot;battle tracking&quot;, including the
        development of one unit&apos;s information management workflow from email
        thread to spreadsheet to single, unified Common Operating Picture,
        available securely to provide visibility to all echelons of the
        battalion.
      </p>

      <p>
        As a Florida National Guardsman, I have responded to 5 hurricanes with
        the state and I will show you some tricks for helping evolve your data
        management quickly.
      </p>

      <p>
        <a
          href="https://www.youtube.com/watch?v=XRkU8iNz1QM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Video Link
        </a>
      </p>

      <h3>
        <a
          href="https://www.gatorredleg.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gator Redleg Chapter of the U.S Field Artillery Association
        </a>{" "}
        - Web Architect, Board Member
      </h3>

      <p>
        Lead redesign of core public-facing website to include integrating
        newsletter handling, membership database, event coordination, and photo
        album sharing. Implemented event registration and reporting for key
        membership activites.
      </p>

      <h3>
        Great American Teach In - Speaker -{" "}
        <a
          href="https://docs.google.com/presentation/d/1fh9LzLK---iwmaeZr9i871KvtWVT8OvvJCZ8jYFndRU/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Slides
        </a>
      </h3>

      <p>
        The Great American Teach-In is an annual event coordinated by the Polk
        County Public Schools&apos; Department of Public Relations and Strategic
        Partnerships to celebrate American Education Week.
      </p>

      <p>
        During this event, members of the community are invited to speak to
        students about their careers, travel and hobbies, and how their early
        educational experiences relate to their current lives.
      </p>

      <p>
        Students enjoy the opportunity to hear real stories from real community
        members. Each year Teach-In volunteers inspire students to stay focused
        and keep looking ahead to the future. In previous years, volunteers have
        come in costume, shown students their work-related equipment, performed
        songs, dances and plays, offered potentially life-saving information,
        showed off their pets, discussed career options, shared precious
        souvenirs, talked about other parts of the world, cooked delicious meals,
        stepped down from the pedestal of celebrity to meet students at their
        level, or simply read a story.
      </p>

      <p>
        The Teach-In introduces students to career options they might never have
        considered, hobbies they might never have discovered, and activities they
        might never have experienced.
      </p>

      <h3>
        <a
          href="https://tampacc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tampa Code Camp
        </a>{" "}
        - Speaker
      </h3>

      <h4>
        October 2017 - &quot;Resiliency Patterns: Managing Failure in a Chaotic
        World&quot;
      </h4>

      <p>
        A survey of the resiliency patterns and techniques for managing transient
        failures in a distributed or cloud-connected world. Topics will include
        circuit breakers, retries, timeouts, and bulkheads using the Polly
        library for C# and the Hysterix library for the JVM.
      </p>

      <h4>
        July 2016 - &quot;Moving Fast Without Breaking Things in .NET&quot;
      </h4>

      <p>
        I provided insight into my background and experience on the .NET platform
        while working in organizations that can&apos;t afford to have outages
        and regressions while still embracing continuous integration and agile
        processes.
      </p>

      <h3>
        <a
          href="https://www.meetup.com/Code-Lakeland"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code Lakeland
        </a>{" "}
        - Speaker
      </h3>

      <p>
        I am a regular member and speaker at Code Lakeland, a group who meets to
        discuss tech-related topics monthly. I presented on improvements to the
        hiring and interviewing process during the March 2017 meetup.
      </p>

      <h3>Operation Code - Mentor</h3>

      <p>
        I mentored veterans of the US military who are transitioning into new
        careers in Information Technology and Software Development, providing
        interview preparation, career coaching, and side-project code reviews and
        insight.
      </p>

      <h2>Education</h2>

      <h3>
        <a
          href="https://usf.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of South Florida
        </a>{" "}
        - Tampa, FL
      </h3>
      <p>
        <strong>Degree: B.S. Computer Information Systems</strong> - Graduated
        May, 2009
      </p>

      <p>
        Florida Academic Scholars - Bright Futures Scholarship recipient
        <br />
        Men&apos;s Varsity Baseball, 2006 - 2007
        <br />
        Intramural Crew Team - 2005
      </p>

      <h5>Major Curriculum (Abbreviated)</h5>

      <ul>
        <li>Software Engineering &amp; Testing</li>
        <li>Database Design</li>
        <li>Information Security</li>
        <li>Web Application Development</li>
        <li>Financial &amp; Managerial Accounting</li>
      </ul>
    </>
  );
}
