import { FaGraduationCap } from "react-icons/fa"

export const educationData = () => {
  return {
    title: "Education",
    icon: <FaGraduationCap className="section-icon" size={22} />,
    values: [
      {
        title: "BE, Computer Engineering, Savitribai Phule Pune University, Pune",
        date: "August 2017 - Present"
      },
      {
        title: "Higher Secondary School, SNBP Junior College, Pimpri, Pune",
        date: "June 2015 - February 2017"
      },
      {
        title: "Secondary School, Infant Jesus High School, Pune",
        date: "June 2010 - March 2015"
      },
    ]
  }
}