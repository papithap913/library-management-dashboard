import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <Formik
      initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label>Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>
          <div>
            <label>ISBN</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" />
          </div>
          <div>
            <label>Publication Date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Add Book
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;

