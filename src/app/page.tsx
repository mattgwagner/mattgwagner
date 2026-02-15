import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matt G. Wagner",
  description:
    "Home page and resume site of Matt Wagner, a software developer from Lakeland, Florida.",
};

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>

      <Image
        src="/IMG_8595.JPG"
        alt="Matt G. Wagner"
        width={400}
        height={300}
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />

      <p>
        This is the home page and resume site of Matt Wagner, a software
        developer from Lakeland, Florida. On these pages are a bit about myself,
        the work I&apos;ve done and projects I&apos;ve worked on, and a little
        background to how I got where I am now.
      </p>

      <p>
        Please visit the <Link href="/contactme">Contact</Link> page for more
        information on how to get in touch with me.
      </p>

      <h1>About Me</h1>

      <p>
        I am a 34 year old software developer from Tampa, FL. I grew up in
        Lakeland, FL before moving to attend the University of South Florida in
        Tampa. I am married to my best friend, Amanda.
      </p>

      <h2>Career</h2>

      <p>
        I took my first job at the University of South Florida working at the
        Academic Computing Help Desk, helping to provide technical support to
        both students and faculty of one of the country&apos;s largest
        universities. It was a great learning experience for me, as I was able to
        hone my communication skills as well as get some valuable job training
        for later positions. I worked there part-time while attending classes
        before moving on to another position with USF in the University
        Controller&apos;s Office. At the UCO, I worked as the main technical
        asset in charge of deploying and maintaining about 150 end-user desktop
        and laptop machines and other hardware.
      </p>

      <p>
        I left there to take an internship at JPMorganChase as part of the
        Corporate Development Program in the summer of 2008, working as a Web
        Applications Developer. Our team&apos;s main product was Treasury
        Services flagship electronic statement platform which serviced thousands
        of large cap organizations, generating and retrieving their account
        analysis and demand deposit account statements. At Chase, I worked as a
        project and technical lead on several projects in charge of project
        management, planning, and organization with development resources in
        Mumbai, India.
      </p>

      <Image
        src="/ColtonAndMe.JPG"
        alt="Colton and Me"
        width={600}
        height={400}
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <p>
        After working at Chase, I was recruited and joined a speciality software
        development company in Clearwater, FL, called Loop. The flagship product,
        AutoLoop, was a best-of-class automated marketing and customer retention
        software suite that helped auto dealerships keep their customers coming
        back. I was a developer on their infrastructure and integrations team,
        reporting to the CTO, and helping to keep the back end administration and
        data imports rolling.
      </p>

      <Image
        src="/Graduation.JPG"
        alt="Graduation"
        width={600}
        height={400}
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <p>
        In the fall of 2010, I joined the Florida Army National Guard and
        attended Basic Combat Training. Upon my return from BCT, my wife and I
        moved back to my home town to settle in. After spending some time working
        for a local credit union, I returned to working for Loop as a remote
        developer from my home office. I left to join a partner company, ASRPro,
        to work on their integration and architecture.
      </p>

      <p>
        After ASRPro was acquired by DealerTrack in the summer of 2014, I
        accepted an offer to join CertiPay as the principal software engineer on
        a new product they wanted to build, specializing in many of the same
        areas I had gained experience in at ASRPro and AutoLoop.
      </p>

      <h2>Hobbies</h2>

      <Image
        src="/AppalachianTrail.JPG"
        alt="Appalachian Trail"
        width={600}
        height={400}
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <p>
        In my free time, which seems to be less and less these days, I can
        probably be found reading somewhere around the house on my Kindle or
        taking the kids to the park.
      </p>
    </>
  );
}
