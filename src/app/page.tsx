import { Container, Footer, Header, Main } from '@/exports/layout';
import { Button, NavigationItem } from '@/exports/shared';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    url='/'
                    name='Landing'
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
                <Main />
                <Footer />
            </Container>
        </>
    );
}
