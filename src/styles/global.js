import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
    /* font-family: 'Montserrat', sans-serif; */
    margin: 0;
    padding: 0;
}

html {
    font-size: 1.1rem;
}

h1, p {
    margin: 0;
}
h1 {
    font-family: 'Montserrat', sans-serif;
}

body {
    font-family: 'Roboto', sans-serif;
    color: white;
}
p {
    /* font-family: 'Merriweather', serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* color: rgba(255, 255, 255, 0.88); */
}

body.dark {
    --background: #282C35;
    --link: #50fa7b; 
    --white: #f8f8f2;
    --h2: #bd93f9;
    --h3: #ff5555;
    --h4: #f1fa8c;
    --pagination: #bd93f9;
    background-color: var(--background);
}

body.light {
    /* --background: var(--white); */
    --background: #E6E6E6;
    /* --link: #153b3b; 
    --link: #419D78;  */
    --link: #297373; 
    --pagination: #0096FF; 
    --white: #f8f8f2;
    --h2: #bd93f9;
    --h3: #ff5555;
    --h4: #f1fa8c;
    --text: #2a2d43;
    background-color: var(--background);
    color: var(--text)
}
`

export default GlobalStyles
