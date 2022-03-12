import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
    return (
        <>
            <Row justify='center'>
                <Col xl={12}>
                    <Input
                        size="large" placeholder="Введите название книги или имя автора" prefix={<SearchOutlined />}/>
                </Col>
            </Row>
        </>
    )
};

export default Search;
