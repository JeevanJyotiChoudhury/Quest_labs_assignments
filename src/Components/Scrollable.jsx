import React from "react";
import TopNav from "./TopNav";
import Headings from "./Headings";
import MessageInput from "./MessageInput";
import Community from "./Community";
import Detail from "./Detail";

const Scrollable = () => {
  return (
    <div>
      <TopNav />
      <Headings />
      <MessageInput />
      <Community image={"https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x"}
        title={"The Intercom Community"}
        description={"Be sure to check out the Intercom Community for support, plus tips & tricks from Intercom users and much more"} />
      <Detail/>
      <Community image={"https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"}
        title={"Future-Proofing Businesses with Modern Customer Engagement"}
        description={"Customer retention is more important than ever.See how businesses are building unified, efficient customer engagement strategies that protect their bottom line."} />
    </div>
  );
};

export default Scrollable;
