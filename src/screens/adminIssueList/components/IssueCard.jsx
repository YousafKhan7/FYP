import React from "react";
import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const IssueCard = ({ issue }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/adminIssueDetail", { state: { issue } });
    return;
  };

  const getPriorityBadgeVariant = (priority) => {
    switch (priority) {
      case "High":
        return "danger";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "secondary";
    }
  };

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case "Pending":
        return "info";
      case "Assigned":
        return "primary";
      case "In Progress":
        return "warning";
      case "Resolved":
        return "success";
      case "Rejected":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className="mb-3"
      style={{
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
      }}
    >
      <Card.Body>
        {/* First Row: Title, Priority, and Status */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0">{issue.title}</h5>
          <div>
            <Badge
              bg={getPriorityBadgeVariant(issue?.priority)}
              className="me-2"
            >
              {issue?.priority} Priority
            </Badge>
            <Badge bg={getStatusBadgeVariant(issue?.status)}>
              {issue?.status}
            </Badge>
          </div>
        </div>

        {/* Second Row: Category and Name */}
        <div className="d-flex justify-content-between mb-2">
          <span>
            <strong>Category:</strong> {issue.category}
          </span>
          <span>
            <strong>Name:</strong> {issue.createdBy.name}
          </span>
        </div>

        {/* Third Row: Department and CMS */}
        <div className="d-flex justify-content-between mb-2">
          <span>
            <strong>Department:</strong> {issue.department}
          </span>
          <span>
            <strong>CMS:</strong> {issue.createdBy.cms}
          </span>
        </div>

        {/* Fourth Row: Created At */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1vh",
          }}
        >
          <small className="text-muted text-center">
            <strong>Created At: </strong>
            {new Date(issue.createdAt).toLocaleString()}
          </small>
        </div>
      </Card.Body>
    </Card>
  );
};

export default IssueCard;
