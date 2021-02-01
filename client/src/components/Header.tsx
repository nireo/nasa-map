import React from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const PageHeader: React.FC = () => {
    return (
        <div>
            <Container text>
                <Header
                    as="h1"
                    content="Exploring nature"
                    style={{
                        fontSize: "4em",
                        fontWeight: "normal",
                        marginBottom: 0,
                        marginTop: "3em",
                    }}
                />
                <Header
                    as="h2"
                    content="What is truly happening around the world."
                    style={{
                        fontSize: "1.7em",
                        fontWeight: "normal",
                        marginTop: "1.5em",
                    }}
                />
                <Link to="/map">
                    <Button primary size="huge">
                        Go to the map!
                    </Button>
                </Link>
            </Container>
        </div>
    );
};
