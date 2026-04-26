import { UserData } from "@/src/interfaces/user";
import { Form } from "./Form";

export const Login: React.FC = () => {
    const onSuccess = (res: UserData) => {
        // Redirect to dashboard
    };

    return (
        <div className={"w-full h-full grid grid-cols-2 px-6 gap-16 relative"}>
            <Form onSuccess={onSuccess} />
            <div className="w-120 h-160 my-auto mr-auto rounded-lg overflow-hidden relative z-1">
                <img
                    src="/design-portfolio/img/pexels-thienleduyphoto-36809138.jpg"
                    alt="pexels-thienleduyphoto-36809138"
                    className=""
                />
            </div>
        </div>
    );
};
