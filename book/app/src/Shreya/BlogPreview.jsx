import React from 'react';

const blogStyle = {
  backgroundColor: '#fff',
  padding: '2rem',
  marginTop: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  animation: 'fadeInUp 2s ease-out',
  maxWidth: '1200px',
  margin: '2rem auto',
  border: '1px solid #e0f2f1',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem',
};

const cardStyle = {
  flex: '1 1 calc(33.333% - 1rem)',
  marginBottom: '1.5rem',
  padding: '1rem',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const cardHoverStyle = {
  transform: 'scale(1.02)',
  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  color: '#00796b',
  textDecoration: 'none',
  fontWeight: 'bold',
  marginTop: '1rem',
  transition: 'color 0.3s ease',
};

const linkHoverStyle = {
  color: '#004d40',
};

class BlogPreview extends React.Component {
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
      <section style={blogStyle}>
        <h2 style={{ color: '#00796b', textAlign: 'center' }}>Latest Blog Posts</h2>
        <div style={cardContainerStyle}>
          {this.renderBlogPost('Understanding Anxiety', 'Learn about the signs, symptoms, and treatments for anxiety.', '/understanding-anxiety', 0)}
          {this.renderBlogPost('Benefits of Mindfulness', 'Discover how mindfulness can improve your mental health.', '/benefits-of-mindfulness', 1)}
          {this.renderBlogPost('Self-Care Tips', 'Explore practical self-care tips to enhance your well-being.', '/self-care-tips', 2)}
        </div>
      </section>
    );
  }

  renderBlogPost(title, description, link, index) {
    const isHovered = this.state.hoverIndex === index;

    return (
      <article
        style={{
          ...cardStyle,
          ...(isHovered ? cardHoverStyle : {}),
        }}
        onMouseEnter={() => this.handleMouseEnter(index)}
        onMouseLeave={this.handleMouseLeave}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          style={{
            ...linkStyle,
            ...(isHovered ? linkHoverStyle : {}),
          }}
        >
          Read more
        </a>
      </article>
    );
  }
}

export default BlogPreview;
