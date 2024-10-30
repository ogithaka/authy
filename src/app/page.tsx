import { Container, Footer, Header, Main } from '@/exports/layout';
import { NavigationItem } from '@/exports/shared';

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
            </Header>
            <Container>
                <Main />
                <Footer />
            </Container>
        </>
    );
}
