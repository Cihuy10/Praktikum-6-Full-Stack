import React from 'react';
import { Button, Card, ListGroup, Badge, Row, Col } from 'react-bootstrap';

const getPriorityBadge = (priority) => {
  switch (priority) {
    case 'High':
      return 'danger';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'secondary';
  }
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'In Progress':
      return 'primary';
    case 'Done':
      return 'success';
    case 'To Do':
    default:
      return 'secondary';
  }
};
// ------------------------------------

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  return (
    // Kita gunakan ListGroup untuk tampilan daftar yang bersih
    <ListGroup>
      {/* Tambahkan pesan jika tidak ada tugas */}
      {tasks.length === 0 && (
        <ListGroup.Item>Tidak ada tugas saat ini. Silakan tambahkan!</ListGroup.Item>
      )}

      {tasks.map((task) => (
        <ListGroup.Item key={task.id} className="p-3">
          {/* Kita gunakan Row/Col untuk membuat kolom */}
          <Row className="align-items-center">
            
            {/* Kolom 1: Nama Tugas (Lebih lebar) */}
            <Col md={5} xs={12} className="mb-2 mb-md-0">
              <span className="fw-bold">{task.name}</span>
            </Col>

            {/* Kolom 2: Prioritas */}
            <Col md={2} xs={4}>
              <Badge bg={getPriorityBadge(task.priority)} className="w-100 p-2">
                {task.priority}
              </Badge>
            </Col>

            {/* Kolom 3: Status */}
            <Col md={2} xs={4}>
              <Badge bg={getStatusBadge(task.status)} className="w-100 p-2">
                {task.status}
              </Badge>
            </Col>

            {/* Kolom 4: Tombol Aksi */}
            <Col md={3} xs={4} className="text-end">
              <Button variant="outline-primary" size="sm" className="me-2" onClick={() => showEditForm(task)}>
                Edit
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </Col>

          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskList;