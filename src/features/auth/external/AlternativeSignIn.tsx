const EXTERNAL_OAUTH = ["facebook", "twitter-x", "google", "linkedin"];

export const AlternativeSignIn: React.FC = () => {
    return (
        <div className="flex gap-4 text-black text-lg">
            {EXTERNAL_OAUTH.map((oauth) => (
                <div
                    key={oauth}
                    data-target={oauth}
                    className="data-[oauth=twitter-x]:text-sm text-base w-8 h-8 text-white/75 bg-white/5 border-white/15 border-2 hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center cursor-pointer"
                >
                    <i className={`ri-${oauth}-line`} />
                </div>
            ))}
        </div>
    );
};
