export const text = `
In this demo; two pages are displayed. The demo app uses a single layout with two distinct links to navigate between the two pages. The layout component is the first example of component reuse by wrapping all the page specific content in it using react.children property.

The two separate pages both implement the same list component, the list component is programmed to receive two props; heading and list. Heading is the text displayed as the list header and list is an array of strings that is then passed to an iteration function that enumerates the list items as an unordered list.
`