import Link from "next/link";
import React from 'react';
import { text } from './text'
let runFetchDoc = true;
export function Layout(props) {

    return <>

        <nav>
            <a className="brand">
                <h3>React Reuse Component Demo</h3>
            </a>
            <div className="nav-links">
                <Link href={'/'}>
                    <a title="homepage">Home Page</a>
                </Link>

                <Link href={'/page-2'}>
                    <a title="page two">Page Two</a>
                </Link>
            </div>
        </nav>

        <main style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>{props.children}</div>
            <blockquote>{text}</blockquote>
        </main>

        <footer>
            <div>
                Footer
            </div>
        </footer>

    </>
}

