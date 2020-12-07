import { FaSeedling } from "react-icons/fa"

export const extraData = () => {
  return {
    title: "Extra-Curricular Activities",
    icon: <FaSeedling className="section-icon" size={22} />,
    values: [
      {
        title: "Robotics Research Lab, Pune",
        date: "August 2018 - August 2020",
        listData: ["Member of 1st ranked team in Maharashtra in National Level Robotics Competition, Robocon.", "Involved in management and technical assistant of the team."]
      }
    ]
  }
}