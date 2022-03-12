import { Button, Col, Input, Modal, Row } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const AddBook = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" size='large'
                icon={<PlusCircleOutlined style={{ fontSize: '150%' }} />}
                style={{
                    width: '50px', height: '50px', bottom: '50px',
                    position: 'absolute', right: '100px'
                }}
                onClick={showModal}
            />

            <Modal title="Добавление книги" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Отмена
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Добавить
                    </Button>
                ]}
            >
                <Row>
                    <Col xl={24}>
                        <Input placeholder="Автор" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col xl={24}>
                        <Input placeholder="Название книги" />
                    </Col>
                </Row>
            </Modal>
        </>
    )
};

export default AddBook;