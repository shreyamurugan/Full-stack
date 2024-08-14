import React from 'react';

const testimonialsStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  marginTop: '2rem'
};

const testimonialStyle = {
  margin: '1rem',
  padding: '1rem',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'inline-block',
  width: '80%'
};

const TestimonialsSlider = () => {
  return (
    <section style={testimonialsStyle} id="testimonials">
      <h2>What Our Clients Say</h2>
      <div style={{ whiteSpace: 'nowrap', overflowX: 'scroll', paddingBottom: '1rem' }}>
        <div style={testimonialStyle}>
          <p>"This platform has been a lifeline for me. The community support and expert guidance have made a huge difference in my life."</p>
          <cite>- SHREYA </cite>
        </div>
        <div style={testimonialStyle}>
          <p>"I have found invaluable resources here that have helped me on my journey to better mental health."</p>
          <cite>- ROASHINI </cite>
        </div>
        <div style={testimonialStyle}>
          <p>"The workshops and support groups are amazing. I feel more connected and supported than ever before."</p>
          <cite>- ABIRAMI</cite>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
