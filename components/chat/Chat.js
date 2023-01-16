export default function Chat() {
  return (
    <div className=" text-gray-200 current-chat flex items-center hover:bg-gray-700 p-2 cursor-pointer space-x-2 rounded-xl">
      <img
        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover hover:opacity-90 cursor-pointer"
        src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
      />
      <div className="info flex flex-col text-gray-200 text-xs md:text-sm">
        <span className="">
          <span className="font-semibold">Diaa Ayman</span>
        </span>
        <span className="text-xs text-gray-400">abugam21@gmail.com</span>
      </div>
    </div>
  );
}
