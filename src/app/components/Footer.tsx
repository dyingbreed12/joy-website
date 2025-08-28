const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center text-sm">
        <p className="mb-2">© {new Date().getFullYear()} Teacher Joy. All Rights Reserved.</p>
        <p>Designed and Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;