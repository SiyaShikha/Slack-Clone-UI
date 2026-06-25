import { useParams } from "react-router-dom";

const Channel = () => {
  const { channelName } = useParams<{ channelName: string }>();

  return (
    <div className="p-4 bg-white w-full h-full">
      <h2 className="text-lg font-bold">Channel {channelName}</h2>
    </div>
  );
};

export default Channel;
