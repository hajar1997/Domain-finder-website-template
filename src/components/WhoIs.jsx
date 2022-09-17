import { Card } from 'antd';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';


const tabListNoTitle = [
{
key: 'Domain Information',
tab: 'Domain Information',
},
{
key: 'Registrant Contact',
tab: 'Registrant Contact',
},
{
key: 'Administrative Contact',
tab: 'Administrative Contact',
}
];
const contentListNoTitle = {
article: <p>article content</p>,
app: <p>app content</p>,
project: <p>project content</p>,
};

const WhoIs = () => {
const [activeTabKey2, setActiveTabKey2] = useState('app');



const onTab2Change = (key) => {
setActiveTabKey2(key);
};

return (
<>
    <div className='whois-style'>
        <div className="whois-wrapper">
            <h6 className='mb-3'>Who Is</h6>
            <Card style={{
          width: '100%'
        }} tabList={tabListNoTitle} activeTabKey={activeTabKey2} onTabChange={(key)=> {
                onTab2Change(key);
                }}
                >
                <Container>
                    <Row>
                        <Col lg={3} sm={3}>Domain:</Col>
                        <Col lg={9} sm={5}>adobe.com</Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>Registrar:</Col>
                        <Col lg={9} sm={5}>Nom-iq Ltd. dba COM LAUDE</Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>Registered On:</Col>
                        <Col lg={9} sm={5}>1986-11-17</Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>Expires On:</Col>
                        <Col lg={9} sm={5}>2022-05-17</Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>Updated On:</Col>
                        <Col lg={9} sm={5}>2021-04-17</Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>Status:</Col>
                        <Col lg={9} sm={5}>clientUpdateProhibited <br />
                        serverDeleteProhibited <br />
                        serverTransferProhibited <br />
                        serverUpdateProhibited
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={3}>
                        Name Servers:
                        </Col>
                        <Col lg={9} sm={5}>
                        a1-217.akam.net <br />
                        a10-64.akam.net <br />
                        a13-65.akam.net <br />
                        a26-66.akam.net <br />
                        a28-67.akam.net <br />
                        a7-64.akam.net <br />
                        adobe-dns-01.adobe.com <br />
                        adobe-dns-03.adobe.com <br />
                        adobe-dns-04.adobe.com <br />
                        adobe-dns-05.adobe.com
                        </Col>
                    </Row>
                </Container>
                {/* <ul className='whois-ul'>
                    <div className="lists-of-info">
                        <li>Domain:</li>
                        <li>Registrar:</li>
                        <li>Registered On:</li>
                        <li>Expires On:</li>
                        <li>Updated On:</li>
                        <li>Status:</li>
                        <br />
                        <br />
                        <br />
                        <br />
                        <li>Name Servers:</li>
                    </div>
                    <div className="answers-of-info">
                        <li>adobe.com</li>
                        <li>Nom-iq Ltd. dba COM LAUDE</li>
                        <li>1986-11-17</li>
                        <li>2022-05-17</li>
                        <li>2021-04-17</li>
                        <li>clientUpdateProhibited <br />
                            serverDeleteProhibited <br />
                            serverTransferProhibited <br />
                            serverUpdateProhibited</li> <br />
                        <li>a1-217.akam.net <br />
                            a10-64.akam.net <br />
                            a13-65.akam.net <br />
                            a26-66.akam.net <br />
                            a28-67.akam.net <br />
                            a7-64.akam.net <br />
                            adobe-dns-01.adobe.com <br />
                            adobe-dns-03.adobe.com <br />
                            adobe-dns-04.adobe.com <br />
                            adobe-dns-05.adobe.com <br /></li>
                    </div>

                </ul> */}
            </Card>
        </div>
    </div>

</>
);
};

export default WhoIs;