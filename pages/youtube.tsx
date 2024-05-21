const Movie = () => {
    return (
  <div>
        <h1>YouTube Video Embed</h1>
        <iframe 
        width="500" 
        height="400" 
        src="https://www.youtube.com/embed/3f2RTgFtPY4"
        title="この動画を見れば頭おかしいリアフレ達の全てがわかります【山田ハウス】" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
      </div>
    );
  };
  
  export default Movie;