import React from 'react';

const faqStyle = {
  backgroundColor: '#f1f1f1',
  padding: '2rem',
  marginTop: '2rem',
  borderRadius: '8px',
  animation: 'slideIn 2s ease-out',
  maxWidth: '1200px',
  margin: '2rem auto',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const faqContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem',
};

const faqItemStyle = {
  flex: '1 1 calc(33.333% - 1rem)',
  marginBottom: '1.5rem',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '20px',  // Increased border radius for more curved corners
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const faqItemHoverStyle = {
  transform: 'scale(1.02)',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
};

class FAQ extends React.Component {
  state = {
    hoverIndex: -1,
  };

  handleMouseEnter = (index) => {
    this.setState({ hoverIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoverIndex: -1 });
  };

  render() {
    return (
      <section style={faqStyle}>
        <h2 style={{ color: '#00796b', textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div style={faqContainerStyle}>
          {this.renderFAQItem('What is mental health?', 'Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.', 0)}
          {this.renderFAQItem('How can I get help?', 'You can get help by reaching out to a mental health professional or joining a support group. Our platform offers various resources to assist you.', 1)}
          {this.renderFAQItem('What services do you offer?', 'We offer counseling, support groups, workshops, and a variety of online resources to support your mental health journey.', 2)}
        </div>
      </section>
    );
  }

  renderFAQItem(question, answer, index) {
    const isHovered = this.state.hoverIndex === index;

    return (
      <div
        style={{
          ...faqItemStyle,
          ...(isHovered ? faqItemHoverStyle : {}),
        }}
        onMouseEnter={() => this.handleMouseEnter(index)}
        onMouseLeave={this.handleMouseLeave}
      >
        <h3 style={{ marginBottom: '0.5rem', color: '#00796b' }}>{question}</h3>
        <p style={{ color: '#333' }}>{answer}</p>
      </div>
    );
  }
}

export default FAQ;
