const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-white border-t border-gray-200 py-6 mt-auto'>
      <div className='container flex justify-between items-center'>
        <p className='text-gray-600'>
          &copy; {currentYear} 개발 블로그. All rights reserved.
        </p>
        <div className='space-x-4'>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:text-primary-dark transition-colors'
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
