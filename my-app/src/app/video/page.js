

const Youtube = () => {
    return (
        <div>
            <iframe
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/6jQdZcYY8OY?si=vVsjPvPPtaqZesDn" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default function Content() {
    return Youtube()
}
