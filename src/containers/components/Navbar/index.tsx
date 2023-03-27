import "./style.scss"

export default function Navbar() {
  return (
    <div>
      <ul className="nav bg-dark">
        <li className="nav-item">
          <a className="nav-link active" href='/#' aria-current="page"><img alt='logoITviec' src='./logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png' /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/#'>All jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/#'>IT Companies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/#'>Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/#'>IT Story</a>
        </li>
      </ul>
    </div>
  )
}
