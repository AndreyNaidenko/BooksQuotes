import { Button, Col, Input, Row } from 'antd';
import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';

const Search = () => {
    return (
        <>
            <Row justify='center'>
                <Col xl={12}>
                    <Input
                        size="large" placeholder="Введите название книги или имя автора" prefix={<SearchOutlined />}
                        style={{ borderRadius: '25px' }} />
                </Col>
            </Row>

            <Button type="primary" size='large' shape="circle"
            icon={<PlusCircleOutlined style={{ fontSize: '200%' }} />}
            style={{ 
                width: '50px', height: '50px', bottom: '50px',
                position: 'absolute', right: '100px'
                }} />
        </>
    )
};

export default Search;
