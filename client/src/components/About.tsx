import React from "react";
import { Container, Header } from "semantic-ui-react";

export const AboutPage: React.FC = () => {
    return (
        <Container>
            <Header>About</Header>
            <p>
                Nature tracker is a small project made to display what is truly
                happening around the world. All the natural phenomena is gotten
                from a NASA api. The events are displayed as point on a map in
                which you can move and zoom freely.
            </p>

            <p style={{ marginTop: "1rem" }}>
                This project is also open source and hosted on{" "}
                <a
                    href="https://github.com/nireo/nature-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github
                </a>
                .
            </p>
        </Container>
    );
};
