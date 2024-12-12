import { useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function CUPrice({ dataRaw, isShow, onSave, onClose }) {
    const formRef = useRef();

    const [validated, setValidated] = useState(false);

    const [data, setData] = useState({
        id: dataRaw?.id ?? 0,
        order: dataRaw?.order ?? '',
        value: dataRaw?.value ?? '',
    });

    // Cập nhật data khi dataRaw thay đổi
    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            order: dataRaw?.order ?? '',
            value: dataRaw?.value ?? '',
        });
    }, [dataRaw]);

    // Sử dụng target.value để lấy giá trị input đúng
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
                    order: '',
                    value: '',
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    order: '',
                    value: '',
                });
                setValidated(false);
            }
        }
    };

    return (
        <Modal show={isShow} onHide={onClose} size="lg" className="bg-overlay-70 p-4">
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: '2rem' }}>{dataRaw ? 'Sửa thông tin giá' : 'Thêm giá'}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: '1.6rem' }}>
                <Form noValidate validated={validated} ref={formRef}>
                    <Form.Group className="mb-3">
                        <Form.Label>Vị trí(order):</Form.Label>
                        <Form.Control
                            value={data.order || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="order"
                            type="text"
                            placeholder="Nhập vị trí(order)"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập vị trí(order).</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Giá trị:</Form.Label>
                        <Form.Control
                            value={data.value || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="value"
                            type="text"
                            placeholder="Nhập giá trị"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập giá trị.</Form.Control.Feedback>
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

export default CUPrice;
