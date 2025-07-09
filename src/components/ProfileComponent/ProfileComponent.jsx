
import MeowImage from "../../assets/img/meow.png";
export default function ProfileComponent() {
    return (
        <>
        <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6">
            <img src={MeowImage} alt="MeowImgae" width={250} height={350}/>
            <h1 className="text-black">Meow Meow</h1>
            <h2 className="text-black">Cats are lequid</h2>
            <button>Click here to see lequid</button>
        </div>
        
        </>
    );
}