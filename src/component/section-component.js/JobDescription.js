import React from 'react'
import Accordion from '../asset-component/Accordion'

const jobs = [
    {
      question: "DESIGNATION/ TITLE: Business Development Executive",
      answer:
        "NO OF OPENINGS:  8 <br/> <br/> YEARS OF EXPERIENCE: 0-3 Years <br/> <br/> Job Profile & Required Skills Responsible for identifying new contacts in large organizations and establishing good relationship with them to keep on getting various IT Marketing Projects from them on regular basis. Act as a point of contact between the client and internal team Analysing client requirements and drafting business proposals Must be able to acquire new clientele through direct marketing in international market Make calls to explore new business opportunities and interact with clients on daily basis and identify their marketing requirements (such as Website Marketing, Social Media Marketing, Online Reputation Management, Digital marketing, Email marketing etc.,.) Conduct market research activity to gather information on prospects, competitors etc. Goal oriented, highly confident, self-motivated, ambitious team player."
    },
    {
      question: "DESIGNATION: Jr. Dot Net Developer",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "DESIGNATION : Jr. Web Designer",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "DESIGNATION/ TITLE: Shopify Developer",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
    {
      question: "DESIGNATION: Jr. SEO Executive",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    }
  ];


const JobDescription = () => {
  return (
    <>
    <div className="job-description">
        <h1>Job description</h1>
        <Accordion data={jobs} />
    </div>
    </>
  )
}

export default JobDescription