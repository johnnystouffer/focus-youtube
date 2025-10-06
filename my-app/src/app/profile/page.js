import Back from "@/components/Back";
import NotFound from "../not-found";

export default function Profile() {

    const UNFINISHED = true;

    if (UNFINISHED) {
        return (
            <NotFound />
        );
    }

    return (
        <>    
            <Back/>    
            <div className="h-screen w-screen flex items-center justify-center">
                <p>Profile</p>
            </div>
        </>

    );
}