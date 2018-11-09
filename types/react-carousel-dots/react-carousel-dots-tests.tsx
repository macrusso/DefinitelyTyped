import Dots, { DotsProps } from "react-carousel-dots";
import * as React from "react";

const initProps: DotsProps = {
    length: 10,
    active: 2,
    size: 10,
    visible: 5,
    className: "test-class-name"
};

class DotsTest extends React.Component {
    render() {
        return <Dots {...initProps} />;
    }
}
