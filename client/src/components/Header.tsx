import React from 'react';
import { Container, Header, Icon, Button } from 'semantic-ui-react';

export const PageHeader: React.FC = () => {
    return <div>
        <Container text>
            <Header
                as='h1'
                content='Exploring nature'
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: '3em',
                }}
            />
            <Header
                as='h2'
                content='Following some of the horrors of nature.'
                style={{
                    fontSize: '1.7em',
                    fontWeight: 'normal',
                    marginTop: '1.5em',
                }}
            />
            <Button primary size='huge'>
                Go to the map!
            </Button>
        </Container>
    </div>
} 