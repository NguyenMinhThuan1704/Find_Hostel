import { useEffect, useRef, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function CUPackageService({ dataRaw, isShow, onSave, onClose }) {
    const formRef = useRef();

    const [validated, setValidated] = useState(false);

    const [data, setData] = useState({
        id: dataRaw?.id ?? 0,
        name: dataRaw?.name ?? '',
        description: dataRaw?.description ?? '',
        price: dataRaw?.price ?? '',
        star: dataRaw?.star ?? '',
        duration: dataRaw?.duration ?? '',
    });

    // Cập nhật data khi dataRaw thay đổi
    useEffect(() => {
        setData({
            id: dataRaw?.id ?? 0,
            name: dataRaw?.name ?? '',
            description: dataRaw?.description ?? '',
            price: dataRaw?.price ?? '',
            star: dataRaw?.star ?? '',
            duration: dataRaw?.duration ?? '',
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
                    name: '',
                    description: '',
                    price: '',
                    star: '',
                    duration: '',
                });
                setValidated(false);
            } else {
                onSave(data, 'create');
                setData({
                    id: 0,
                    name: '',
                    description: '',
                    price: '',
                    star: '',
                    duration: '',
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
                        <Form.Label>Tên gói tin đăng:</Form.Label>
                        <Form.Control
                            value={data.name || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="name"
                            type="text"
                            placeholder="Nhập tên gói tin đăng"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập tên gói tin đăng.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mô tả:</Form.Label>
                        <Form.Control
                            value={data.description || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="description"
                            type="text"
                            placeholder="Nhập mô tả"
                            autoFocus
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập mô tả.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Giá gói tin:</Form.Label>
                        <Form.Control
                            value={data.price || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="price"
                            type="text"
                            placeholder="Nhập giá gói tin"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập giá gói tin.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Số sao:</Form.Label>
                        <Form.Control
                            value={data.star || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="star"
                            type="text"
                            placeholder="Nhập số sao"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập số sao.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Khoảng thời gian:</Form.Label>
                        <Form.Control
                            value={data.duration || ''} // Đảm bảo giá trị luôn có giá trị xác định
                            name="duration"
                            type="text"
                            placeholder="Nhập khoảng thời gian"
                            required
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">Vui lòng nhập khoảng thời gian.</Form.Control.Feedback>
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

export default CUPackageService;
