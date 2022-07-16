import { Button, Form, Input, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Author, Book } from './interfaces';

const AddBook = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const getAuthors = (authors: Author | Author[]) => {
        fetch("http://127.0.0.1:8000/", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            },
        }).then(responce => responce.json())
            .then(result => {
                console.log(result);
            });
    };

    const addBook = (book: Book) => {
        fetch("http://127.0.0.1:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book)
        }).then(responce => responce.json())
            .then(result => {
                console.log(result);
            });

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <>
            <Button type="primary" size='large'
                icon={<PlusOutlined style={{ fontSize: '150%' }} />}
                style={{
                    width: '50px', height: '50px', bottom: '50px',
                    position: 'absolute', right: '100px'
                }}
                onClick={showModal}
            />

            <Modal
                title="Добавление книги"
                visible={isModalVisible}
                onOk={form.submit}
                onCancel={handleCancel}
                okText="Добавить"
                cancelText="Отмена"
            >
                <Form form={form} onFinish={addBook}>
                    <Form.Item name="author">
                        <Input placeholder="Автор" />
                    </Form.Item>
                    <Form.Item name="bookName">
                        <Input placeholder="Название книги" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};

export default AddBook;