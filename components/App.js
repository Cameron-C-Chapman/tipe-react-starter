import Link from 'next/link'
export default ({ children }) => (
  <div>
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="https://cdn.tipe.io/tipe/tipe-1024x1024.png?w=128" />
          </a>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="navbar-item">
              Blog
            </a> 
          </Link>
        </div>
      </div>
    </nav>
    {children}
  </div>
)
