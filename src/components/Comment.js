import React from 'react';

export const Comment = ({ comment }) => (
  <div className="d-flex text-muted pt-3">
    <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">{comment.title}</strong>
        <strong className="d-block text-gray-dark">{comment.email}</strong>
        {comment.body}
    </p>
  </div>
);