export default function Background() {
    return (
        <video
            className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
            src="/assets/media/background.mp4"
            autoPlay
            muted
            loop
            playsInline
        />
    );
}