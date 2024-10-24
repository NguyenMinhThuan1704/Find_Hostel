import { useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
function CUTypePost({ dataRaw, isShow, onSave, onClose }) {
    const formRef = useRef();

    const [validated, setValidated] = useState(false);

    const [data, setData] = useState({
        id: dataRaw?.id ?? 0,
        code: dataRaw?.code ?? '',
        value: dataRaw?.value ?? '',
        header: dataRaw?.header ?? '',
        subheader: dataRaw?.subheader ?? '',
    });

    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            code: dataRaw?.code ?? '',
            value: dataRaw?.value ?? '',
            header: dataRaw?.header ?? '',
            subheader: dataRaw?.subheader ?? '',
        });
    }, [dataRaw]);

    const handleChange = (e) => {
        const target = e.target;

        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (formRef.current.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            if (dataRaw) {
                onSave(data, 'update');
                setData({
                    id: 0,
                    code: '',
                    value: '',
                    header: '',
                    subheader: '',
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    code: '',
                    value: '',
                    header: '',
                    subheader: '',
                });
                setValidated(false);
            }
        }
    };

    return (
        <Modal show={isShow} onHide={onClose} size="lg" className="bg-overlay-70 p-4">
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: '2rem' }}>
                    {dataRaw ? 'Sửa thông tin loại tin đăng' : 'Thêm loại tin đăng'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: '1.6rem' }}>
                <Form noValidate validated={validated} ref={formRef}>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên loại tin đăng:</Form.Label>
                        <Form.Control
                            value={data.value}
                            name="value"
                            type="text"
                            placeholder="Nhập tên loại tin đăng"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tên loại tin đăng.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mã số tin đăng:</Form.Label>
                        <Form.Control
                            value={data.code}
                            name="code"
                            type="text"
                            placeholder="Nhập mã số tin đăng"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập mã số tin đăng.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tiêu đề:</Form.Label>
                        <Form.Control
                            value={data.header}
                            name="header"
                            type="text"
                            placeholder="Nhập tiêu đề"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tiêu đề.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tiêu đề phụ:</Form.Label>
                        <Form.Control
                            value={data.subheader}
                            name="subheader"
                            type="text"
                            placeholder="Nhập tiêu đề phụ"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tiêu đề phụ.</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Đóng
                </Button>
                <Button type="submit" variant="primary" onClick={handleSave}>
                    {dataRaw ? 'Cập nhật' : 'Thêm mới'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CUTypePost;
