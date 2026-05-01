const EXTERNAL_OAUTH = ["facebook", "twitter-x", "google", "linkedin"];

export const AlternativeSignIn: React.FC = () => {
    return (
        <div className="flex gap-4 text-black text-lg">
            {EXTERNAL_OAUTH.map((oauth) => (
                <div
                    key={oauth}
                    className="bg-white hover:bg-white/95 w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer"
                >
                    <i className={`ri-${oauth}-fill`} />
                </div>
            ))}
        </div>
    );
};
