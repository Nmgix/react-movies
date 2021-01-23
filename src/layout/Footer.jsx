function Footer() {
  return (
    <div>
      <footer className="page-footer grey darken-2">
        <div className="footer-copyright grey darken-3">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://vk.com/danyanepali"
            >
              VK
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Footer };
