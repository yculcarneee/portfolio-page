import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Nav} from 'react-bootstrap';   

export default function About() {
    return(
        <div className="App">
            <Card style={{backgroundColor: '#e63946', color: 'white'}}>
                <Card.Body id = 'about-card'>
                    <Container className="section-top">
                        <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image src="http://placekitten.com/150/150" roundedCircle={true}/>
                        </Row>
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <h2>Yash Kulkarni</h2>
                        </Row>
                        <Row style={{alignItems: 'left', marginTop: '3vh'}}>
                            <p>
                                Hello, I'm Yash, a software developer with experience in development using C++ and Python and web technologies such as React, Node.js, Express, etc. 
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at. Libero id faucibus nisl tincidunt. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Ante in nibh mauris cursus mattis. Elementum facilisis leo vel fringilla est. Nunc faucibus a pellentesque sit amet. Auctor eu augue ut lectus arcu. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Congue quisque egestas diam in arcu cursus euismod.

Vel orci porta non pulvinar neque laoreet suspendisse interdum. Senectus et netus et malesuada. Dignissim sodales ut eu sem integer vitae justo eget. Diam phasellus vestibulum lorem sed. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Senectus et netus et malesuada fames ac turpis egestas sed. Cursus risus at ultrices mi tempus imperdiet nulla. Vulputate odio ut enim blandit volutpat maecenas volutpat. Eu augue ut lectus arcu. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Amet nisl suscipit adipiscing bibendum est ultricies. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Odio ut sem nulla pharetra diam sit amet nisl. Purus semper eget duis at tellus at urna. Sem viverra aliquet eget sit amet tellus cras. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.

Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Facilisis leo vel fringilla est ullamcorper eget nulla. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Habitant morbi tristique senectus et netus et. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Fermentum leo vel orci porta non pulvinar neque laoreet. A cras semper auctor neque vitae. Convallis tellus id interdum velit. Eget sit amet tellus cras. Enim diam vulputate ut pharetra sit amet aliquam. Vel pharetra vel turpis nunc eget lorem dolor sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. In cursus turpis massa tincidunt dui ut. Quisque id diam vel quam elementum pulvinar etiam. Eu nisl nunc mi ipsum. Urna cursus eget nunc scelerisque viverra mauris in. Ut etiam sit amet nisl purus in mollis. Volutpat sed cras ornare arcu dui vivamus arcu.

Consectetur purus ut faucibus pulvinar elementum integer enim. Et netus et malesuada fames ac. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Mattis rhoncus urna neque viverra justo nec. Suspendisse faucibus interdum posuere lorem ipsum dolor. A diam maecenas sed enim ut sem viverra aliquet. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Eu feugiat pretium nibh ipsum consequat nisl vel. Curabitur vitae nunc sed velit dignissim sodales ut. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Amet venenatis urna cursus eget nunc scelerisque. Purus sit amet volutpat consequat mauris nunc congue. Tortor posuere ac ut consequat semper viverra nam libero.

Sed egestas egestas fringilla phasellus. Volutpat blandit aliquam etiam erat velit scelerisque. Vel fringilla est ullamcorper eget. Gravida arcu ac tortor dignissim convallis. Adipiscing elit duis tristique sollicitudin nibh. Pharetra convallis posuere morbi leo urna molestie. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Nunc sed augue lacus viverra vitae congue eu. Tortor posuere ac ut consequat semper. Diam quam nulla porttitor massa id neque aliquam. Suscipit tellus mauris a diam maecenas sed enim ut. Enim diam vulputate ut pharetra sit. Pharetra et ultrices neque ornare aenean euismod elementum. Dui nunc mattis enim ut. Vel pretium lectus quam id leo in vitae turpis. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Non diam phasellus vestibulum lorem sed risus.
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}