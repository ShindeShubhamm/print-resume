import { IoMdBriefcase } from "react-icons/io"

export const employmentData = () => {
  return {
    title: "Employment History",
    icon: <IoMdBriefcase className="section-icon" size={22} />,
    values: [
      {
        title: "MERN Developer Intern at 10xGrowth",
        date: "June 2020 - December 2020",
        listData: ["Used technologies like NextJS, ReactJS, Firebase, MongoDB, Node-LoopbackJS and other libraries and utilities to solve complex problems.", "Created user friendly and attractive user interfaces using Material UI and SASS.", "Wrote business logic in LoopbackJS and exposed to endpoints.", "Formulated and implemented performance improvement techniques, minimizing web page load time.", "Wrote reusable and clean code."]
      }
    ]
  }
}