// Type definitions for react-carousel-dots 0.1
// Project: https://github.com/fulopdaniel/react-carousel-dots
// Definitions by: Mac Rusek <https://github.com/macrusso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface DotsProps {
    length: number;
    active: number;
    size?: number;
    margin?: number;
    visible?: number;
    className?: string;
}

declare class Dots extends React.Component<DotsProps> {
    constructor(props: DotsProps);
}

export default Dots;
