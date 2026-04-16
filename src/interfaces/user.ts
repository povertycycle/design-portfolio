export type VerificationStatus =
    | "VERIFIED"
    | "UNVERIFIED"
    | "PENDING"
    | "REJECTED";

export interface UserData {
    id: string;
    profile: {
        fullName: string;
        username: string;
        email: string;
        phoneNumber: string;
        role: {
            theme: {
                id: string;
                primaryColor: string;
                secondaryColor: string;
                tertiaryColor: string;
            };
            title: string;
        };
        avatar: string | null;
        verification: {
            status: VerificationStatus;
            verifiedAt: string | null;
        };
        bio: string;
        socialMedia: { name: string; url: string }[];
        createdAt: string;
        updatedAt: string | null;
    };
    metaData: {
        isEmailVerified: boolean;
    };
}
