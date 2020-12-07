import { IoMdPerson } from "react-icons/io"

export const profileData = () => {
  return {
    title: "Profile",
    icon: <IoMdPerson className="section-icon" size={22} />,
    values: [
      {
        text: "Highly motivated and skilled Computer Engineer. Good problem solving skills. Worked with modern technologies like ReactJS, NextJS, NodeJS and other Javascript frameworks & libraries. Good knowledge of working with databases."
      }
    ]
  }
}