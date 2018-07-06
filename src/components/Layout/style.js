
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
    :root {
        --body-bg-color: green;
        --body-text-color: yellow;
        --link-text-color: rgb(0, 183, 255);
    }

    body {
        background-color: var(--body-bg-color);
        color: var(--body-text-color);
    }

    a {
        color: var(--link-text-color);
    }
`;