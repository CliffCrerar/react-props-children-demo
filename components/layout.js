import Link from "next/link";


export function Layout(props) {
    return <div>
        <nav>
            <p>Navbar</p>
            <Link href={'/'}>
                <a>Home Page</a>
            </Link>
            <span> | </span>
            <Link href={'/page-2'}>
                <a>Page Two</a>
            </Link>
        </nav>
        <hr/>
        <main>
            {props.children}
        </main>
        <footer>
            <hr/>
            Footer
        </footer>
    </div>
}