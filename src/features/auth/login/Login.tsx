import { UserData } from "@/src/interfaces/user";
import { Form } from "./Form";

export const Login: React.FC = () => {
    const onSuccess = (res: UserData) => {
        // Redirect to dashboard
    };

    return (
        <div className={"w-full h-full relative"}>
            <div className="w-full h-full relative z-1 grid grid-cols-2 px-6 gap-16 bg-black/75">
                <Form onSuccess={onSuccess} />
                <div className="w-120 h-160 my-auto mr-auto rounded-2xl overflow-hidden relative z-1">
                    <img
                        src="/design-portfolio/img/pexels-thienleduyphoto-36809138.jpg"
                        alt="pexels-thienleduyphoto-36809138"
                        className=""
                    />
                </div>
            </div>
            <img
                src="/design-portfolio/img/pexels-wal_-172619-2156618639-36077711.jpg"
                className="absolute h-full w-full object-cover top-0 left-0 blur-sm"
            />
        </div>
    );
};
