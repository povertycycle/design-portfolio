type AvatarProps = {
    username?: string;
    avatar?: string | null;
    size?: number;
    color?: string;
};

export const Avatar: React.FC<
    React.HTMLAttributes<HTMLDivElement> & AvatarProps
> = ({
    username,
    avatar,
    size = 32,
    color,
    className,
    style,
    ...otherProps
}) => {
    return (
        <div
            data-cy="user-avatar"
            {...otherProps}
            className={`${className} w-8 h-8 overflow-hidden bg-white relative aspect-square`}
            style={style}
        >
            <div
                className={`flex items-center justify-center w-full h-full relative font-medium text-jalin-blue-dark`}
            >
                {avatar ? (
                    <img
                        alt=""
                        src={avatar}
                        width={size}
                        height={size}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span
                        style={{
                            fontSize: `${Math.round(size / 3.8) / 10}rem`,
                        }}
                    >
                        {(username ?? "Username").slice(0, 2).toUpperCase()}
                    </span>
                )}
            </div>
        </div>
    );
};
