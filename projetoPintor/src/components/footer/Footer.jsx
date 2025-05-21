import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          © 2025 Pinturas Tiago Duarte. Todos os direitos reservados.
        </p>
      </div>
      <p style={styles.text} className='text-white'>
        📞 Telefone: <a href="tel:+551498111-7141" style={styles.link} className='text-warning' >+55 (14) 98111-7141</a>
      </p>
      <p style={styles.text} className='text-white'>
        ✉️ Email: <a href="mailto:goldpinturasjau@gmail.com" style={styles.link} className='text-warning'>goldpinturasjau@gmail.com</a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center',
    marginTop: '50px',
    borderTop: '1px solid #ddd'
  },
  text: {
    margin: '5px 0',
    fontSize: '16px',
    color: '#333',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  }
};

export default Footer;
