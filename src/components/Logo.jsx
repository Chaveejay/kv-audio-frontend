import { AiFillAudio } from "react-icons/ai";

export default function Logo(){
    return(
        <div>
            <div className="flex justify-center items-center w-full h-full">
  <div className="flex flex-col justify-center items-center bg-amber-300 w-40 h-40 p-2 rounded-full">
    <AiFillAudio className="w-10 h-10" />
    <div className="text-2xl font-secondary font-bold ">Kv- <span className="font-medium">Audio</span></div>
  </div>
</div>

        </div>
    )
}