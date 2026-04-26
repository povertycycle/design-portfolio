import "../styles/global.css";
import "remixicon/fonts/remixicon.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="overflow-hidden w-full h-full">{children}</body>
        </html>
    );
}
