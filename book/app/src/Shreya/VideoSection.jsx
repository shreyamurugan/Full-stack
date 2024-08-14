import React from 'react';

const videoSectionStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  marginTop: '2rem'
};

const videoStyle = {
  width: '80%',
  height: '450px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const VideoSection = () => {
  return (
    <section style={videoSectionStyle} id="videos">
      <h2>Helpful Videos</h2>
      <div>
        <iframe
          style={videoStyle}
          src="https://youtu.be/FDOSYmoLyB8"
          title="Mental Health Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
