"use client";

import { FaCalendar, FaPlus, FaUser, FaVideo } from "react-icons/fa";
import MeetingTypeItem from "./meeting-type-item";
import CreateScheduleDialog from "./dialogs/create-schedule-dialog";
import CreateMeetingDialog from "./dialogs/create-meeting-dialog";
import JoinMeetingDialog from "./dialogs/join-meeting-dialog";

export default function MeetingTypeList() {
  const meetingTypes = [
    {
      title: "Start Meeting",
      description: "Start an instant meeting",
      icon: <FaPlus className="text-lg" />,
      dialog: <CreateMeetingDialog />,
    },
    {
      title: "Schedule Meeting",
      description: "Plan your meeting in advance",
      icon: <FaCalendar className="text-lg" />,
      dialog: <CreateScheduleDialog />,
    },
    {
      title: "View Recordings",
      description: "Check out your meeting recordings",
      icon: <FaVideo className="text-lg" />,
      dialog: null,
    },
    {
      title: "Join Meeting",
      description: "Join an existing meeting",
      icon: <FaUser className="text-lg" />,
      dialog: <JoinMeetingDialog />,
    },
  ];

  const renderedMeetingTypes = meetingTypes.map((meetingType) => (
    <MeetingTypeItem
      key={meetingType.title}
      title={meetingType.title}
      description={meetingType.description}
      icon={meetingType.icon}
      dialog={meetingType.dialog}
    />
  ));

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">{renderedMeetingTypes}</div>
    </>
  );
}
