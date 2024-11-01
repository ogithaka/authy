import { Container, Footer, Header, Main } from '@/exports/layout';
import { Button, NavigationItem } from '@/exports/shared';
import { Hero } from '@/exports/views';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    url='/docs'
                    name='Docs'
                />
                <Button
                    url='/account'
                    name='Account'
                />
            </Header>
            <Container>
                <Main>
                    <Hero />
                </Main>
                <Footer />
            </Container>
        </>
    );
}
