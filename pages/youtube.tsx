const Movie = () => {
    return (
  <div>
        <h1>YouTube Video Embed</h1>
        <iframe
          width="560"
          height="315"
          src="https://youtu.be/BfSvuhJHTyg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default Movie;